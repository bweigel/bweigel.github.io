var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "242",
        "ko": "758"
    },
    "minResponseTime": {
        "total": "7520",
        "ok": "7520",
        "ko": "21793"
    },
    "maxResponseTime": {
        "total": "32420",
        "ok": "28969",
        "ko": "32420"
    },
    "meanResponseTime": {
        "total": "22705",
        "ok": "12811",
        "ko": "25864"
    },
    "standardDeviation": {
        "total": "6383",
        "ok": "3792",
        "ko": "2814"
    },
    "percentiles1": {
        "total": "24168",
        "ok": "12079",
        "ko": "24940"
    },
    "percentiles2": {
        "total": "26428",
        "ok": "13626",
        "ko": "27249"
    },
    "percentiles3": {
        "total": "31249",
        "ok": "20395",
        "ko": "31520"
    },
    "percentiles4": {
        "total": "31929",
        "ok": "28677",
        "ko": "31986"
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
        "count": 242,
        "percentage": 24
    },
    "group4": {
        "name": "failed",
        "count": 758,
        "percentage": 76
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30.303",
        "ok": "7.333",
        "ko": "22.97"
    }
},
contents: {
"req_post-42b90": {
        type: "REQUEST",
        name: "post",
path: "post",
pathFormatted: "req_post-42b90",
stats: {
    "name": "post",
    "numberOfRequests": {
        "total": "1000",
        "ok": "242",
        "ko": "758"
    },
    "minResponseTime": {
        "total": "7520",
        "ok": "7520",
        "ko": "21793"
    },
    "maxResponseTime": {
        "total": "32420",
        "ok": "28969",
        "ko": "32420"
    },
    "meanResponseTime": {
        "total": "22705",
        "ok": "12811",
        "ko": "25864"
    },
    "standardDeviation": {
        "total": "6383",
        "ok": "3792",
        "ko": "2814"
    },
    "percentiles1": {
        "total": "24168",
        "ok": "12079",
        "ko": "24940"
    },
    "percentiles2": {
        "total": "26428",
        "ok": "13626",
        "ko": "27249"
    },
    "percentiles3": {
        "total": "31249",
        "ok": "20395",
        "ko": "31520"
    },
    "percentiles4": {
        "total": "31929",
        "ok": "28677",
        "ko": "31986"
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
        "count": 242,
        "percentage": 24
    },
    "group4": {
        "name": "failed",
        "count": 758,
        "percentage": 76
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30.303",
        "ok": "7.333",
        "ko": "22.97"
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
