var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "62",
        "ko": "138"
    },
    "minResponseTime": {
        "total": "2579",
        "ok": "2579",
        "ko": "29077"
    },
    "maxResponseTime": {
        "total": "30139",
        "ok": "27806",
        "ko": "30139"
    },
    "meanResponseTime": {
        "total": "24315",
        "ok": "13260",
        "ko": "29282"
    },
    "standardDeviation": {
        "total": "8518",
        "ok": "7533",
        "ko": "261"
    },
    "percentiles1": {
        "total": "29159",
        "ok": "11253",
        "ko": "29186"
    },
    "percentiles2": {
        "total": "29224",
        "ok": "22300",
        "ko": "29285"
    },
    "percentiles3": {
        "total": "30094",
        "ok": "24742",
        "ko": "30121"
    },
    "percentiles4": {
        "total": "30127",
        "ok": "26923",
        "ko": "30133"
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
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 138,
        "percentage": 69
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.452",
        "ok": "2",
        "ko": "4.452"
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
        "ok": "30",
        "ko": "70"
    },
    "minResponseTime": {
        "total": "2579",
        "ok": "2579",
        "ko": "29077"
    },
    "maxResponseTime": {
        "total": "30093",
        "ok": "26359",
        "ko": "30093"
    },
    "meanResponseTime": {
        "total": "24359",
        "ok": "13124",
        "ko": "29174"
    },
    "standardDeviation": {
        "total": "8272",
        "ok": "6910",
        "ko": "123"
    },
    "percentiles1": {
        "total": "29152",
        "ok": "11339",
        "ko": "29158"
    },
    "percentiles2": {
        "total": "29163",
        "ok": "21936",
        "ko": "29166"
    },
    "percentiles3": {
        "total": "29186",
        "ok": "22696",
        "ko": "29329"
    },
    "percentiles4": {
        "total": "29383",
        "ok": "25338",
        "ko": "29598"
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
        "count": 30,
        "percentage": 30
    },
    "group4": {
        "name": "failed",
        "count": 70,
        "percentage": 70
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.226",
        "ok": "0.968",
        "ko": "2.258"
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
        "ok": "32",
        "ko": "68"
    },
    "minResponseTime": {
        "total": "3026",
        "ok": "3026",
        "ko": "29147"
    },
    "maxResponseTime": {
        "total": "30139",
        "ok": "27806",
        "ko": "30139"
    },
    "meanResponseTime": {
        "total": "24272",
        "ok": "13387",
        "ko": "29394"
    },
    "standardDeviation": {
        "total": "8757",
        "ok": "8072",
        "ko": "313"
    },
    "percentiles1": {
        "total": "29220",
        "ok": "10383",
        "ko": "29239"
    },
    "percentiles2": {
        "total": "29331",
        "ok": "23978",
        "ko": "29362"
    },
    "percentiles3": {
        "total": "30126",
        "ok": "24823",
        "ko": "30127"
    },
    "percentiles4": {
        "total": "30136",
        "ok": "26909",
        "ko": "30137"
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
        "count": 32,
        "percentage": 32
    },
    "group4": {
        "name": "failed",
        "count": 68,
        "percentage": 68
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.226",
        "ok": "1.032",
        "ko": "2.194"
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
