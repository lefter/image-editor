import Colorpicker from './tools/colorpicker';
import Range from './tools/penRange';
import Submenu from './submenuBase';
import templateHtml from './template/submenu/shape';
import { toInteger } from '../util';
import { defaultShapeStrokeValus } from '../consts';

const SHAPE_DEFAULT_OPTION = {
    stroke: '#D53331',
    fill: '',
    strokeWidth: 8
};

/**
 * Shape ui class
 * @class
 * @ignore
 */
class Shape extends Submenu {
    constructor(subMenuElement, { locale, iconStyle, menuBarPosition, usageStatistics, showSubmenu }) {
        super(subMenuElement, {
            locale,
            name: 'shape',
            iconStyle,
            menuBarPosition,
            templateHtml,
            usageStatistics,
            showSubmenu
        });
        this.type = 'line';
        this.options = SHAPE_DEFAULT_OPTION;

        this._els = {
            shapeSelectButton: this.selector('#tie-shape-button'),
            shapeColorButton: this.selector('#tie-shape-color-button'),
            strokeRange: new Range(this.selector('#tie-stroke-range'), 2),
            strokeColorpicker: new Colorpicker(
                this.selector('#tie-color-stroke'), '#c30000', this.toggleDirection, this.usageStatistics
            )
        };
        this.colorPickerControls.push(this._els.strokeColorpicker);
    }

    /**
     * Add event for shape
     * @param {Object} actions - actions for shape
     *   @param {Function} actions.changeShape - change shape mode
     *   @param {Function} actions.setDrawingShape - set dreawing shape
     */
    addEvent(actions) {
        this.actions = actions;
        this._els.shapeSelectButton.addEventListener('click', this._changeShapeHandler.bind(this));
        this._els.strokeRange.on('change', this._changeStrokeRangeHandler.bind(this));
        this._els.strokeColorpicker.on('change', this._changeStrokeColorHandler.bind(this));
        // this.changeStartMode();
    }

    /**
     * Set Shape status
     * @param {Object} options - options of shape status
     *   @param {string} strokeWidth - stroke width
     *   @param {string} strokeColor - stroke color
     *   @param {string} fillColor - fill color
     */
    setShapeStatus({ strokeWidth, strokeColor, fillColor }) {
        this._els.strokeRange.value = strokeWidth;
        this._els.strokeRange.trigger('change');

        this._els.strokeColorpicker.color = strokeColor;
        this.options.stroke = strokeColor;
        this.options.fill = fillColor;
        this.options.strokeWidth = strokeWidth;
    }

    /**
     * Executed when the menu starts.
     */
    changeStartMode() {
        this.actions.stopDrawingMode();
        this.startDraw();
    }

    /**
     * Returns the menu to its default state.
     */
    changeStandbyMode() {
        this.type = null;
        // this.actions.stopDrawingMode();
        // this.actions.cancelAddIcon();
        this.actions.changeSelectableAll(true);

        this._els.shapeSelectButton.classList.remove('circle');
        this._els.shapeSelectButton.classList.remove('triangle');
        this._els.shapeSelectButton.classList.remove('rect');
        this._els.shapeSelectButton.classList.remove('line');
        this._els.shapeSelectButton.classList.remove('arrow');
    }

    /**
     * set range stroke max value
     * @param {number} maxValue - expect max value for change
     */
    setMaxStrokeValue(maxValue) {
        let strokeMaxValue = maxValue;
        if (strokeMaxValue <= 0) {
            strokeMaxValue = defaultShapeStrokeValus.max;
        }
        this._els.strokeRange.max = strokeMaxValue;
    }

    // start draw mode
    startDraw() {
        this.actions.stopDrawingMode();
        this.actions.setDrawMode(
            {
                color: this.options.stroke,
                width: this.options.strokeWidth
            }
        );
    }

    clearIconType() {
        this._els.shapeSelectButton.classList.remove(this.type);
        this.type = null;
    }

    /**
     * Set stroke value
     * @param {number} value - expect value for strokeRange change
     */
    setStrokeValue(value) {
        this._els.strokeRange.value = value;
        this._els.strokeRange.trigger('change');
    }

    /**
     * Get stroke value
     * @returns {number} - stroke range value
     */
    getStrokeValue() {
        return this._els.strokeRange.value;
    }

    /**
     * Change icon color
     * @param {object} event - add button event object
     * @private
     */
    _changeShapeHandler(event) {
        const button = event.target.closest('.tui-image-editor-button');
        if (button) {
            this.actions.discardSelection();
            const shapeType = this.getButtonType(button, ['circle', 'triangle', 'rect', 'line', 'arrow']);
            if (shapeType === 'line') { // 画完默认不选中
                this.changeStandbyMode();
                this.startDraw();
                this.type = shapeType;
                this._els.shapeSelectButton.classList.add(shapeType);
                this.actions.changeSelectableAll(false);

                return;
            }
            if (shapeType === 'arrow') {
                this.actions.addIcon('arrow', this.options.stroke);
            }
            if (this.type === shapeType) {
                this.changeStandbyMode();

                return;
            }
            this.changeStandbyMode();
            this.type = shapeType;
            this._els.shapeSelectButton.classList.add(shapeType);
            console.log('aaa', this._els.shapeSelectButton.classList);
            this.actions.changeSelectableAll(false);
            this.actions.modeChange('shape');
        }
    }

    /**
     * Change stroke range
     * @param {number} value - stroke range value
     * @private
     */
    _changeStrokeRangeHandler(value) {
        this.options.strokeWidth = toInteger(value);

        this.actions.changeShape({
            strokeWidth: value
        });
        if (this.type === 'line') {
            this.startDraw();
        } else {
            this.actions.setDrawingShape(this.type, this.options);
        }
    }

    /**
     * Change shape stroke color
     * @param {string} color - fill color
     * @private
     */
    _changeStrokeColorHandler(color) {
        color = color || 'transparent';
        this.options.stroke = color;
        if (this.type === 'line') {
            this.startDraw();
        } else {
            this.actions.changeShape({
                stroke: color
            });
        }
    }
}

export default Shape;
