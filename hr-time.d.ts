// High Resolution Time — https://w3c.github.io/hr-time/
// Interfaces: Performance
// Global properties: performance

export {};

declare global {
  type DOMHighResTimeStamp = number;

  interface PerformanceEntryList extends Array<PerformanceEntry> {}

  interface PerformanceEntry {
    readonly duration: DOMHighResTimeStamp;
    readonly entryType: string;
    readonly name: string;
    readonly startTime: DOMHighResTimeStamp;
    toJSON(): any;
  }

  interface Performance extends EventTarget {
    readonly timeOrigin: DOMHighResTimeStamp;
    clearMarks(markName?: string): void;
    clearMeasures(measureName?: string): void;
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    measure(
      measureName: string,
      startOrMeasureOptions?: string | PerformanceMeasureOptions,
      endMark?: string,
    ): PerformanceMeasure;
    now(): DOMHighResTimeStamp;
    toJSON(): any;
  }

  interface PerformanceMarkOptions {
    detail?: any;
    startTime?: DOMHighResTimeStamp;
  }

  interface PerformanceMeasureOptions {
    detail?: any;
    start?: string | DOMHighResTimeStamp;
    duration?: DOMHighResTimeStamp;
    end?: string | DOMHighResTimeStamp;
  }

  interface PerformanceMark extends PerformanceEntry {
    readonly detail: any;
  }

  interface PerformanceMeasure extends PerformanceEntry {
    readonly detail: any;
  }

  var Performance: {
    prototype: Performance;
    new (): Performance;
  };

  var performance: Performance;
}
