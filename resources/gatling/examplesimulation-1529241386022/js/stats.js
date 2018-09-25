var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1347",
        "ok": "1347",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8654",
        "ok": "8654",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2531",
        "ok": "2531",
        "ko": "-"
    },
    "percentiles1": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4471",
        "ok": "4471",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6450",
        "ok": "6450",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6962",
        "ok": "6962",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 938,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 409,
        "percentage": 30
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "43.452",
        "ok": "43.452",
        "ko": "-"
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
        "total": "679",
        "ok": "679",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6677",
        "ok": "6677",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1516",
        "ok": "1516",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2268",
        "ok": "2268",
        "ko": "-"
    },
    "percentiles1": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3839",
        "ok": "3839",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5740",
        "ok": "5740",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6344",
        "ok": "6344",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 477,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 202,
        "percentage": 30
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "21.903",
        "ok": "21.903",
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
        "total": "668",
        "ok": "668",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8654",
        "ok": "8654",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1889",
        "ok": "1889",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2760",
        "ok": "2760",
        "ko": "-"
    },
    "percentiles1": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5189",
        "ok": "5189",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6669",
        "ok": "6669",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7271",
        "ok": "7271",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 461,
        "percentage": 69
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 207,
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "21.548",
        "ok": "21.548",
        "ko": "-"
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
