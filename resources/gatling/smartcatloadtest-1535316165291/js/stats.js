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
        "total": "2200",
        "ok": "2200",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4318",
        "ok": "4318",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2836",
        "ok": "2836",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "394",
        "ok": "394",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2830",
        "ok": "2830",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3104",
        "ok": "3104",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3414",
        "ok": "3414",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4069",
        "ok": "4069",
        "ko": "-"
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
        "count": 200,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    }
},
contents: {
"req_kategorisiere-bed0d": {
        type: "REQUEST",
        name: "kategorisiere",
path: "kategorisiere",
pathFormatted: "req_kategorisiere-bed0d",
stats: {
    "name": "kategorisiere",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2200",
        "ok": "2200",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4318",
        "ok": "4318",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2836",
        "ok": "2836",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "394",
        "ok": "394",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2830",
        "ok": "2830",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3104",
        "ok": "3104",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3414",
        "ok": "3414",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4069",
        "ok": "4069",
        "ko": "-"
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
        "count": 200,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "40",
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
