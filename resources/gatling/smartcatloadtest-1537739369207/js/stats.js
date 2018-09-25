var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7529",
        "ok": "3100",
        "ko": "4429"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "118",
        "ko": "56"
    },
    "maxResponseTime": {
        "total": "29088",
        "ok": "29038",
        "ko": "29088"
    },
    "meanResponseTime": {
        "total": "10471",
        "ok": "1766",
        "ko": "16563"
    },
    "standardDeviation": {
        "total": "12552",
        "ok": "4914",
        "ko": "12680"
    },
    "percentiles1": {
        "total": "199",
        "ok": "154",
        "ko": "25787"
    },
    "percentiles2": {
        "total": "25795",
        "ok": "301",
        "ko": "25809"
    },
    "percentiles3": {
        "total": "27632",
        "ok": "13008",
        "ko": "27691"
    },
    "percentiles4": {
        "total": "27883",
        "ok": "25853",
        "ko": "27977"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2469,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 56,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 575,
        "percentage": 8
    },
    "group4": {
        "name": "failed",
        "count": 4429,
        "percentage": 59
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36.549",
        "ok": "15.049",
        "ko": "21.5"
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
        "total": "7529",
        "ok": "3100",
        "ko": "4429"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "118",
        "ko": "56"
    },
    "maxResponseTime": {
        "total": "29088",
        "ok": "29038",
        "ko": "29088"
    },
    "meanResponseTime": {
        "total": "10471",
        "ok": "1766",
        "ko": "16563"
    },
    "standardDeviation": {
        "total": "12552",
        "ok": "4914",
        "ko": "12680"
    },
    "percentiles1": {
        "total": "199",
        "ok": "154",
        "ko": "25787"
    },
    "percentiles2": {
        "total": "25795",
        "ok": "301",
        "ko": "25809"
    },
    "percentiles3": {
        "total": "27632",
        "ok": "13008",
        "ko": "27691"
    },
    "percentiles4": {
        "total": "27883",
        "ok": "25853",
        "ko": "27977"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2469,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 56,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 575,
        "percentage": 8
    },
    "group4": {
        "name": "failed",
        "count": 4429,
        "percentage": 59
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36.549",
        "ok": "15.049",
        "ko": "21.5"
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
