"use strict";
exports.__esModule = true;
exports.useTimeline = void 0;
var DEFAULT_EVENT_SIZE = 30;
var DEFAULT_LABEL_TEXT_HEIGHT = 20;
var DEFAULT_LABEL_TEXT_WIDTH = 100;
exports.useTimeline = function (_a) {
    var _b, _c, _d;
    var children = _a.children, _e = _a.gap, gap = _e === void 0 ? 50 : _e, _f = _a.clipped, clipped = _f === void 0 ? true : _f, _g = _a.orientation, orientation = _g === void 0 ? 'horizontal' : _g, _h = _a.activeIndex, activeIndex = _h === void 0 ? 0 : _h, _j = _a.thickness, thickness = _j === void 0 ? 4 : _j, progressBarBackground = _a.progressBarBackground, progressBarForeground = _a.progressBarForeground;
    var eventSize = (_b = children[0].props.eventSize) !== null && _b !== void 0 ? _b : DEFAULT_EVENT_SIZE;
    var labelTextHeight = (_c = children[0].props.labelTextHeight) !== null && _c !== void 0 ? _c : DEFAULT_LABEL_TEXT_HEIGHT;
    var labelTextWidth = (_d = children[0].props.labelTextWidth) !== null && _d !== void 0 ? _d : DEFAULT_LABEL_TEXT_WIDTH;
    var adjustment = eventSize / 2 - thickness / 2;
    var progress = (clipped ? 0 : gap + eventSize) + adjustment + (gap + eventSize) * activeIndex + 'px';
    var progressBar = (clipped ? 0 : gap + eventSize) + adjustment + (gap + eventSize) * (children.length - 1) + 'px';
    var timelineSize = eventSize + thickness + (gap + eventSize) * (children.length - 1) + 'px';
    var top = orientation === 'horizontal' ? adjustment + "px" : clipped ? 0 : -((gap + eventSize / 2) / 2);
    var left = orientation === 'horizontal' ? (clipped ? 0 : -((gap + eventSize / 2) / 2)) : adjustment + "px";
    var height = orientation === 'horizontal' ? eventSize + labelTextHeight + "px" : timelineSize;
    var width = orientation === 'horizontal' ? timelineSize : eventSize + labelTextWidth + "px";
    var flexDirection = orientation === 'horizontal' ? 'row' : 'column';
    return {
        eventWrapperStyle: { gap: gap + "px", flexDirection: flexDirection },
        gap: gap,
        progressBarBgStyle: {
            width: orientation === 'horizontal' ? progressBar : thickness + "px",
            height: orientation === 'horizontal' ? thickness + "px" : progressBar,
            top: top,
            left: left,
            backgroundColor: progressBarBackground
        },
        progressBarFgStyle: {
            width: orientation === 'horizontal' ? progress : '4.5px',
            height: orientation === 'horizontal' ? '4.5px' : progress,
            top: top,
            left: left,
            backgroundColor: progressBarForeground
        },
        timelineStyle: { height: height, width: width }
    };
};
