/**
 * @param {Locale} locale - Translate text
 * @param {Object} normal - iconStyle
 * @param {Object} active - iconStyle
 * @returns {string}
 */
export default ({ locale, iconStyle: { normal, active } }) => (`
    <ul class="tui-image-editor-submenu-item">
        <li id="tie-icon-add-button">
            <div class="tui-image-editor-button" data-icontype="icon-arrow">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-arrow"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-arrow"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    箭头
                </label>
            </div>
            <div class="tui-image-editor-button" data-icontype="icon-arrow-2">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-arrow-2"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-arrow-2"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    箭头2
                </label>
            </div>
            <div class="tui-image-editor-button" data-icontype="icon-arrow-3">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-arrow-3"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-arrow-3"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    箭头3
                </label>
            </div>
            <div class="tui-image-editor-button" data-icontype="icon-star">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-star" class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-star" class="active"/>
                    </svg>
                </div>
                <label>
                    星形1
                </label>
            </div>
            <div class="tui-image-editor-button" data-icontype="icon-star-2">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-star-2"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-star-2"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    星形2
                </label>
            </div>

            <div class="tui-image-editor-button" data-icontype="icon-polygon">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-polygon"
                            class="normal"/>
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-polygon"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    多边形
                </label>
            </div>

            <div class="tui-image-editor-button" data-icontype="icon-location">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-location"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-location"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    位置
                </label>
            </div>

            <div class="tui-image-editor-button" data-icontype="icon-heart">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-heart"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-heart"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    心形
                </label>
            </div>

            <div class="tui-image-editor-button" data-icontype="icon-bubble">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-bubble"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-bubble"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    气泡
                </label>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li>
            <div id="tie-icon-color" title="颜色"></div>
        </li>
    </ul>
`);
