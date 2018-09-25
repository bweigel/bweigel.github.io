var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "3943",
        "ok": "-",
        "ko": "3943"
    },
    "maxResponseTime": {
        "total": "24566",
        "ok": "-",
        "ko": "24566"
    },
    "meanResponseTime": {
        "total": "11543",
        "ok": "-",
        "ko": "11543"
    },
    "standardDeviation": {
        "total": "5625",
        "ok": "-",
        "ko": "5625"
    },
    "percentiles1": {
        "total": "8941",
        "ok": "-",
        "ko": "8941"
    },
    "percentiles2": {
        "total": "12280",
        "ok": "-",
        "ko": "12280"
    },
    "percentiles3": {
        "total": "24247",
        "ok": "-",
        "ko": "24247"
    },
    "percentiles4": {
        "total": "24483",
        "ok": "-",
        "ko": "24483"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 100,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    }
},
contents: {
"req_slim-categoriza-57158": {
        type: "REQUEST",
        name: "Slim Categorization Coldstart",
path: "Slim Categorization Coldstart",
pathFormatted: "req_slim-categoriza-57158",
stats: {
    "name": "Slim Categorization Coldstart",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "3943",
        "ok": "-",
        "ko": "3943"
    },
    "maxResponseTime": {
        "total": "24566",
        "ok": "-",
        "ko": "24566"
    },
    "meanResponseTime": {
        "total": "11543",
        "ok": "-",
        "ko": "11543"
    },
    "standardDeviation": {
        "total": "5625",
        "ok": "-",
        "ko": "5625"
    },
    "percentiles1": {
        "total": "8941",
        "ok": "-",
        "ko": "8941"
    },
    "percentiles2": {
        "total": "12280",
        "ok": "-",
        "ko": "12280"
    },
    "percentiles3": {
        "total": "24247",
        "ok": "-",
        "ko": "24247"
    },
    "percentiles4": {
        "total": "24483",
        "ok": "-",
        "ko": "24483"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 100,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
