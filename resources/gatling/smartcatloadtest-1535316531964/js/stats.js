var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7618",
        "ok": "1693",
        "ko": "5925"
    },
    "minResponseTime": {
        "total": "57",
        "ok": "118",
        "ko": "57"
    },
    "maxResponseTime": {
        "total": "29106",
        "ok": "28560",
        "ko": "29106"
    },
    "meanResponseTime": {
        "total": "19527",
        "ok": "2936",
        "ko": "24268"
    },
    "standardDeviation": {
        "total": "11190",
        "ok": "6648",
        "ko": "6873"
    },
    "percentiles1": {
        "total": "25796",
        "ok": "167",
        "ko": "25806"
    },
    "percentiles2": {
        "total": "25894",
        "ok": "1778",
        "ko": "25906"
    },
    "percentiles3": {
        "total": "27883",
        "ok": "25861",
        "ko": "27940"
    },
    "percentiles4": {
        "total": "28271",
        "ok": "26011",
        "ko": "28374"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1181,
        "percentage": 16
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 48,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 464,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 5925,
        "percentage": 78
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36.981",
        "ok": "8.218",
        "ko": "28.762"
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
        "total": "7618",
        "ok": "1693",
        "ko": "5925"
    },
    "minResponseTime": {
        "total": "57",
        "ok": "118",
        "ko": "57"
    },
    "maxResponseTime": {
        "total": "29106",
        "ok": "28560",
        "ko": "29106"
    },
    "meanResponseTime": {
        "total": "19527",
        "ok": "2936",
        "ko": "24268"
    },
    "standardDeviation": {
        "total": "11190",
        "ok": "6648",
        "ko": "6873"
    },
    "percentiles1": {
        "total": "25796",
        "ok": "167",
        "ko": "25806"
    },
    "percentiles2": {
        "total": "25894",
        "ok": "1778",
        "ko": "25906"
    },
    "percentiles3": {
        "total": "27883",
        "ok": "25861",
        "ko": "27940"
    },
    "percentiles4": {
        "total": "28271",
        "ok": "26011",
        "ko": "28374"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1181,
        "percentage": 16
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 48,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 464,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 5925,
        "percentage": 78
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36.981",
        "ok": "8.218",
        "ko": "28.762"
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
