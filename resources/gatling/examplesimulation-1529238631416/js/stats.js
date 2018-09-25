var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "24",
        "ko": "76"
    },
    "minResponseTime": {
        "total": "7842",
        "ok": "7842",
        "ko": "21805"
    },
    "maxResponseTime": {
        "total": "25017",
        "ok": "11313",
        "ko": "25017"
    },
    "meanResponseTime": {
        "total": "20343",
        "ok": "9729",
        "ko": "23694"
    },
    "standardDeviation": {
        "total": "6038",
        "ok": "1167",
        "ko": "861"
    },
    "percentiles1": {
        "total": "23628",
        "ok": "9774",
        "ko": "23940"
    },
    "percentiles2": {
        "total": "24205",
        "ok": "10838",
        "ko": "24258"
    },
    "percentiles3": {
        "total": "24609",
        "ok": "11293",
        "ko": "24667"
    },
    "percentiles4": {
        "total": "24905",
        "ok": "11311",
        "ko": "24932"
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
        "count": 24,
        "percentage": 24
    },
    "group4": {
        "name": "failed",
        "count": 76,
        "percentage": 76
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.846",
        "ok": "0.923",
        "ko": "2.923"
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
        "ok": "24",
        "ko": "76"
    },
    "minResponseTime": {
        "total": "7842",
        "ok": "7842",
        "ko": "21805"
    },
    "maxResponseTime": {
        "total": "25017",
        "ok": "11313",
        "ko": "25017"
    },
    "meanResponseTime": {
        "total": "20343",
        "ok": "9729",
        "ko": "23694"
    },
    "standardDeviation": {
        "total": "6038",
        "ok": "1167",
        "ko": "861"
    },
    "percentiles1": {
        "total": "23628",
        "ok": "9774",
        "ko": "23940"
    },
    "percentiles2": {
        "total": "24205",
        "ok": "10838",
        "ko": "24258"
    },
    "percentiles3": {
        "total": "24609",
        "ok": "11293",
        "ko": "24667"
    },
    "percentiles4": {
        "total": "24905",
        "ok": "11311",
        "ko": "24932"
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
        "count": 24,
        "percentage": 24
    },
    "group4": {
        "name": "failed",
        "count": 76,
        "percentage": 76
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.846",
        "ok": "0.923",
        "ko": "2.923"
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
