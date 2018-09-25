var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8567",
        "ok": "8566",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "58",
        "ko": "64"
    },
    "maxResponseTime": {
        "total": "4835",
        "ok": "4835",
        "ko": "64"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "64"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "182",
        "ko": "0"
    },
    "percentiles1": {
        "total": "70",
        "ok": "70",
        "ko": "64"
    },
    "percentiles2": {
        "total": "76",
        "ok": "76",
        "ko": "64"
    },
    "percentiles3": {
        "total": "92",
        "ok": "92",
        "ko": "64"
    },
    "percentiles4": {
        "total": "380",
        "ok": "380",
        "ko": "64"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8510,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 24,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 32,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "70.802",
        "ok": "70.793",
        "ko": "0.008"
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
        "total": "4286",
        "ok": "4286",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4835",
        "ok": "4835",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "211",
        "ok": "211",
        "ko": "-"
    },
    "percentiles1": {
        "total": "70",
        "ok": "70",
        "ko": "-"
    },
    "percentiles2": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles3": {
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "percentiles4": {
        "total": "355",
        "ok": "355",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4257,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 9,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 20,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35.421",
        "ok": "35.421",
        "ko": "-"
    }
}
    },"req_fat-categorizat-c9a55": {
        type: "REQUEST",
        name: "Fat Categorization Coldstart",
path: "Fat Categorization Coldstart",
pathFormatted: "req_fat-categorizat-c9a55",
stats: {
    "name": "Fat Categorization Coldstart",
    "numberOfRequests": {
        "total": "4281",
        "ok": "4280",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "58",
        "ko": "64"
    },
    "maxResponseTime": {
        "total": "3103",
        "ok": "3103",
        "ko": "64"
    },
    "meanResponseTime": {
        "total": "87",
        "ok": "87",
        "ko": "64"
    },
    "standardDeviation": {
        "total": "147",
        "ok": "147",
        "ko": "0"
    },
    "percentiles1": {
        "total": "70",
        "ok": "70",
        "ko": "64"
    },
    "percentiles2": {
        "total": "76",
        "ok": "76",
        "ko": "64"
    },
    "percentiles3": {
        "total": "93",
        "ok": "93",
        "ko": "64"
    },
    "percentiles4": {
        "total": "407",
        "ok": "407",
        "ko": "64"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4253,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35.38",
        "ok": "35.372",
        "ko": "0.008"
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
