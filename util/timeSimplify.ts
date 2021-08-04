export const TimeReduce = (sy, sd, ey, ed) => {
    let seasonalMap = {
        January: "Winter",
        February: "Winter",
        March: "Winter",
        April: "Winter",
        May: "Spring",
        June: "Spring",
        July: "Summer",
        August: "Summer",
        September: "Fall",
        October: "Fall",
        December: "Fall",
    };

    let season1 = seasonalMap[sd] ?? sd;

    if (ey === undefined || ey === null) {
        return `${season1} ${sy} - Present`;
    }

    let season2 = seasonalMap[ed] ?? ed;

    if (sy == ey && season1 === season2) {
        return `${season1} ${sy}`;
    }
};
