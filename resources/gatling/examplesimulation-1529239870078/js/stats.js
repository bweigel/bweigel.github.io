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
        "total": "104",
        "ok": "-",
        "ko": "104"
    },
    "maxResponseTime": {
        "total": "1154",
        "ok": "-",
        "ko": "1154"
    },
    "meanResponseTime": {
        "total": "364",
        "ok": "-",
        "ko": "364"
    },
    "standardDeviation": {
        "total": "322",
        "ok": "-",
        "ko": "322"
    },
    "percentiles1": {
        "total": "218",
        "ok": "-",
        "ko": "218"
    },
    "percentiles2": {
        "total": "387",
        "ok": "-",
        "ko": "387"
    },
    "percentiles3": {
        "total": "1120",
        "ok": "-",
        "ko": "1120"
    },
    "percentiles4": {
        "total": "1139",
        "ok": "-",
        "ko": "1139"
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
        "total": "115",
        "ok": "-",
        "ko": "115"
    },
    "maxResponseTime": {
        "total": "1119",
        "ok": "-",
        "ko": "1119"
    },
    "meanResponseTime": {
        "total": "229",
        "ok": "-",
        "ko": "229"
    },
    "standardDeviation": {
        "total": "138",
        "ok": "-",
        "ko": "138"
    },
    "percentiles1": {
        "total": "183",
        "ok": "-",
        "ko": "183"
    },
    "percentiles2": {
        "total": "215",
        "ok": "-",
        "ko": "215"
    },
    "percentiles3": {
        "total": "464",
        "ok": "-",
        "ko": "464"
    },
    "percentiles4": {
        "total": "593",
        "ok": "-",
        "ko": "593"
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
        "total": "104",
        "ok": "-",
        "ko": "104"
    },
    "maxResponseTime": {
        "total": "1154",
        "ok": "-",
        "ko": "1154"
    },
    "meanResponseTime": {
        "total": "500",
        "ok": "-",
        "ko": "500"
    },
    "standardDeviation": {
        "total": "390",
        "ok": "-",
        "ko": "390"
    },
    "percentiles1": {
        "total": "306",
        "ok": "-",
        "ko": "306"
    },
    "percentiles2": {
        "total": "1101",
        "ok": "-",
        "ko": "1101"
    },
    "percentiles3": {
        "total": "1124",
        "ok": "-",
        "ko": "1124"
    },
    "percentiles4": {
        "total": "1141",
        "ok": "-",
        "ko": "1141"
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
