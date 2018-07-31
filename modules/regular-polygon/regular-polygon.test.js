import test from "ava";
import RegularPolygon from "./regular-polygon";

test.beforeEach((t) => {
    t.context = new RegularPolygon([10, 20], 5, 20);
});

test("constructor", (t) => {
    t.is(t.context.points.length, 5);
    t.is(t.context.radius, 20);
    t.is(t.context.position.x, 10);
    t.is(t.context.position.y, 20);

    t.throws(() => new RegularPolygon(), RangeError);
});

test("trace", (t) => {
    const path = {
        lineTo: () => {
            t.pass();
        },
    };
    t.plan(t.context.points.length + 2);
    t.context.trace(path);
});

test("toJSON", (t) => {
    const json = t.context.toJSON();

    t.is(json.nbSides, 5);
    t.is(json.radius, 20);
    t.is(json.points, undefined);
});

test.todo("from");

test("getRotatingPoints", (t) => {
    const points = RegularPolygon.getRotatingPoints(4, 50);

    t.is(points.length, 4);
});
