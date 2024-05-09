import { formatTime } from ".";

describe("format time", () => {
    it("should format time", () => {
        expect(formatTime(0)).toEqual({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
        expect(formatTime(1)).toEqual({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 1,
        });
        expect(formatTime(60)).toEqual({
            days: 0,
            hours: 0,
            minutes: 1,
            seconds: 0,
        });
        expect(formatTime(3600)).toEqual({
            days: 0,
            hours: 1,
            minutes: 0,
            seconds: 0,
        });
        expect(formatTime(86400)).toEqual({
            days: 1,
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
        expect(formatTime(86401)).toEqual({
            days: 1,
            hours: 0,
            minutes: 0,
            seconds: 1,
        });
        expect(formatTime(86460)).toEqual({
            days: 1,
            hours: 0,
            minutes: 1,
            seconds: 0,
        });
        expect(formatTime(86461)).toEqual({
            days: 1,
            hours: 0,
            minutes: 1,
            seconds: 1,
        });
    });
});
