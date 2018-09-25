var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "692",
        "ko": "308"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "215",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "34235",
        "ok": "20204",
        "ko": "34235"
    },
    "meanResponseTime": {
        "total": "6980",
        "ok": "3771",
        "ko": "14189"
    },
    "standardDeviation": {
        "total": "6959",
        "ok": "2889",
        "ko": "7961"
    },
    "percentiles1": {
        "total": "4164",
        "ok": "3415",
        "ko": "10611"
    },
    "percentiles2": {
        "total": "10190",
        "ok": "5877",
        "ko": "11577"
    },
    "percentiles3": {
        "total": "17640",
        "ok": "8280",
        "ko": "33510"
    },
    "percentiles4": {
        "total": "33556",
        "ok": "9175",
        "ko": "34030"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 82,
        "percentage": 8
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 45,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 565,
        "percentage": 56
    },
    "group4": {
        "name": "failed",
        "count": 308,
        "percentage": 31
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28.571",
        "ok": "19.771",
        "ko": "8.8"
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
        "ok": "692",
        "ko": "308"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "215",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "34235",
        "ok": "20204",
        "ko": "34235"
    },
    "meanResponseTime": {
        "total": "6980",
        "ok": "3771",
        "ko": "14189"
    },
    "standardDeviation": {
        "total": "6959",
        "ok": "2889",
        "ko": "7961"
    },
    "percentiles1": {
        "total": "4164",
        "ok": "3415",
        "ko": "10611"
    },
    "percentiles2": {
        "total": "10190",
        "ok": "5877",
        "ko": "11577"
    },
    "percentiles3": {
        "total": "17640",
        "ok": "8280",
        "ko": "33510"
    },
    "percentiles4": {
        "total": "33556",
        "ok": "9175",
        "ko": "34030"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 82,
        "percentage": 8
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 45,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 565,
        "percentage": 56
    },
    "group4": {
        "name": "failed",
        "count": 308,
        "percentage": 31
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28.571",
        "ok": "19.771",
        "ko": "8.8"
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
