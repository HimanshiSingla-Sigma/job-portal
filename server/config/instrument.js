import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
    dsn: "https://47b172747081dc28cd24e82c3bf7a07c@o4509962648944640.ingest.us.sentry.io/4509962654253056",
    integrations : [
        nodeProfilingIntegration(),
        Sentry.mongoIntegration(),
    ],
    // tracesSampleRate: 1.0,
});

Sentry.profiler.startProfiler();

Sentry.startSpan({
    name : "My First Transaction",
},()=>{

})

Sentry.profiler.stopProfiler();