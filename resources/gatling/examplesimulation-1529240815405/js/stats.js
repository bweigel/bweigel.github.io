var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1152",
        "ok": "1152",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "382",
        "ok": "382",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "percentiles1": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    },
    "percentiles2": {
        "total": "391",
        "ok": "391",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1124",
        "ok": "1124",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1141",
        "ok": "1141",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 173,
        "percentage": 87
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 27,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    }
},
contents: {
"req_slim-categoriza-53f85": {
        type: "REQUEST",
        name: "Slim Categorization Warmstart",
path: "Slim Categorization Warmstart",
pathFormatted: "req_slim-categoriza-53f85",
stats: {
    "name": "Slim Categorization Warmstart",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1141",
        "ok": "1141",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "178",
        "ok": "178",
        "ko": "-"
    },
    "percentiles1": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "percentiles2": {
        "total": "229",
        "ok": "229",
        "ko": "-"
    },
    "percentiles3": {
        "total": "514",
        "ok": "514",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1136",
        "ok": "1136",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 97,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
}
    },"req_fat-categorizat-bcd5f": {
        type: "REQUEST",
        name: "Fat Categorization Warmstart",
path: "Fat Categorization Warmstart",
pathFormatted: "req_fat-categorizat-bcd5f",
stats: {
    "name": "Fat Categorization Warmstart",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1152",
        "ok": "1152",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "525",
        "ok": "525",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "345",
        "ok": "345",
        "ko": "-"
    },
    "percentiles1": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "percentiles2": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1128",
        "ok": "1128",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1143",
        "ok": "1143",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 76,
        "percentage": 76
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 24,
        "percentage": 24
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
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
