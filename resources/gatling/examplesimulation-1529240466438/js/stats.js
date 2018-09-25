var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "83",
        "ko": "117"
    },
    "minResponseTime": {
        "total": "8873",
        "ok": "8873",
        "ko": "29077"
    },
    "maxResponseTime": {
        "total": "30158",
        "ok": "25788",
        "ko": "30158"
    },
    "meanResponseTime": {
        "total": "25395",
        "ok": "19794",
        "ko": "29368"
    },
    "standardDeviation": {
        "total": "6316",
        "ok": "6507",
        "ko": "341"
    },
    "percentiles1": {
        "total": "29137",
        "ok": "24185",
        "ko": "29189"
    },
    "percentiles2": {
        "total": "29213",
        "ok": "24700",
        "ko": "29416"
    },
    "percentiles3": {
        "total": "30118",
        "ok": "25534",
        "ko": "30124"
    },
    "percentiles4": {
        "total": "30149",
        "ok": "25672",
        "ko": "30156"
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
        "count": 83,
        "percentage": 42
    },
    "group4": {
        "name": "failed",
        "count": 117,
        "percentage": 59
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.452",
        "ok": "2.677",
        "ko": "3.774"
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
        "ok": "21",
        "ko": "79"
    },
    "minResponseTime": {
        "total": "8873",
        "ok": "8873",
        "ko": "29077"
    },
    "maxResponseTime": {
        "total": "30106",
        "ok": "23570",
        "ko": "30106"
    },
    "meanResponseTime": {
        "total": "26628",
        "ok": "16927",
        "ko": "29206"
    },
    "standardDeviation": {
        "total": "5740",
        "ok": "6141",
        "ko": "139"
    },
    "percentiles1": {
        "total": "29162",
        "ok": "21831",
        "ko": "29167"
    },
    "percentiles2": {
        "total": "29180",
        "ok": "22418",
        "ko": "29192"
    },
    "percentiles3": {
        "total": "29393",
        "ok": "23520",
        "ko": "29421"
    },
    "percentiles4": {
        "total": "29499",
        "ok": "23560",
        "ko": "29628"
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
        "count": 21,
        "percentage": 21
    },
    "group4": {
        "name": "failed",
        "count": 79,
        "percentage": 79
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.226",
        "ok": "0.677",
        "ko": "2.548"
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
        "ok": "62",
        "ko": "38"
    },
    "minResponseTime": {
        "total": "9520",
        "ok": "9520",
        "ko": "29200"
    },
    "maxResponseTime": {
        "total": "30158",
        "ok": "25788",
        "ko": "30158"
    },
    "meanResponseTime": {
        "total": "24161",
        "ok": "20765",
        "ko": "29703"
    },
    "standardDeviation": {
        "total": "6617",
        "ok": "6339",
        "ko": "389"
    },
    "percentiles1": {
        "total": "25216",
        "ok": "24483",
        "ko": "29505"
    },
    "percentiles2": {
        "total": "29423",
        "ok": "24769",
        "ko": "30118"
    },
    "percentiles3": {
        "total": "30127",
        "ok": "25567",
        "ko": "30150"
    },
    "percentiles4": {
        "total": "30157",
        "ok": "25701",
        "ko": "30158"
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
        "count": 62,
        "percentage": 62
    },
    "group4": {
        "name": "failed",
        "count": 38,
        "percentage": 38
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.226",
        "ok": "2",
        "ko": "1.226"
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
