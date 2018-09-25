var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "0",
        "ko": "200"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "1132",
        "ok": "-",
        "ko": "1132"
    },
    "meanResponseTime": {
        "total": "318",
        "ok": "-",
        "ko": "318"
    },
    "standardDeviation": {
        "total": "319",
        "ok": "-",
        "ko": "319"
    },
    "percentiles1": {
        "total": "211",
        "ok": "-",
        "ko": "211"
    },
    "percentiles2": {
        "total": "326",
        "ok": "-",
        "ko": "326"
    },
    "percentiles3": {
        "total": "1109",
        "ok": "-",
        "ko": "1109"
    },
    "percentiles4": {
        "total": "1120",
        "ok": "-",
        "ko": "1120"
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
        "count": 200,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "-",
        "ko": "100"
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
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "469",
        "ok": "-",
        "ko": "469"
    },
    "meanResponseTime": {
        "total": "144",
        "ok": "-",
        "ko": "144"
    },
    "standardDeviation": {
        "total": "76",
        "ok": "-",
        "ko": "76"
    },
    "percentiles1": {
        "total": "124",
        "ok": "-",
        "ko": "124"
    },
    "percentiles2": {
        "total": "149",
        "ok": "-",
        "ko": "149"
    },
    "percentiles3": {
        "total": "356",
        "ok": "-",
        "ko": "356"
    },
    "percentiles4": {
        "total": "376",
        "ok": "-",
        "ko": "376"
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
        "total": "50",
        "ok": "-",
        "ko": "50"
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
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "205",
        "ok": "-",
        "ko": "205"
    },
    "maxResponseTime": {
        "total": "1132",
        "ok": "-",
        "ko": "1132"
    },
    "meanResponseTime": {
        "total": "491",
        "ok": "-",
        "ko": "491"
    },
    "standardDeviation": {
        "total": "370",
        "ok": "-",
        "ko": "370"
    },
    "percentiles1": {
        "total": "299",
        "ok": "-",
        "ko": "299"
    },
    "percentiles2": {
        "total": "1089",
        "ok": "-",
        "ko": "1089"
    },
    "percentiles3": {
        "total": "1113",
        "ok": "-",
        "ko": "1113"
    },
    "percentiles4": {
        "total": "1126",
        "ok": "-",
        "ko": "1126"
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
        "total": "50",
        "ok": "-",
        "ko": "50"
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
