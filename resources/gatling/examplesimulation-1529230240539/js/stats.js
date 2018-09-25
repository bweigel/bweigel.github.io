var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "9748",
        "ok": "-",
        "ko": "9748"
    },
    "meanResponseTime": {
        "total": "2649",
        "ok": "-",
        "ko": "2649"
    },
    "standardDeviation": {
        "total": "2344",
        "ok": "-",
        "ko": "2344"
    },
    "percentiles1": {
        "total": "1669",
        "ok": "-",
        "ko": "1669"
    },
    "percentiles2": {
        "total": "3507",
        "ok": "-",
        "ko": "3507"
    },
    "percentiles3": {
        "total": "7436",
        "ok": "-",
        "ko": "7436"
    },
    "percentiles4": {
        "total": "7618",
        "ok": "-",
        "ko": "7618"
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
        "count": 1000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "-",
        "ko": "90.909"
    }
},
contents: {
"req_spamorham-post--1d1f0": {
        type: "REQUEST",
        name: "spamorham_POST_request",
path: "spamorham_POST_request",
pathFormatted: "req_spamorham-post--1d1f0",
stats: {
    "name": "spamorham_POST_request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "9748",
        "ok": "-",
        "ko": "9748"
    },
    "meanResponseTime": {
        "total": "2649",
        "ok": "-",
        "ko": "2649"
    },
    "standardDeviation": {
        "total": "2344",
        "ok": "-",
        "ko": "2344"
    },
    "percentiles1": {
        "total": "1669",
        "ok": "-",
        "ko": "1669"
    },
    "percentiles2": {
        "total": "3507",
        "ok": "-",
        "ko": "3507"
    },
    "percentiles3": {
        "total": "7436",
        "ok": "-",
        "ko": "7436"
    },
    "percentiles4": {
        "total": "7618",
        "ok": "-",
        "ko": "7618"
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
        "count": 1000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "-",
        "ko": "90.909"
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
