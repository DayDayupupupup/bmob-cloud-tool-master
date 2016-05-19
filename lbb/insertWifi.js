/**
 * Created by Mac on 2016/5/19.
 */
function onRequest(request, response, modules) {
    var db = modules.oData;
    db.insert({
        "table":"wifi",             //表名
        "data":{"mac":request.body.mac,

        }            //需要更新的数据，格式为JSON
    },function(err,data){         //回调函数
        var dataObject = JSON.parse(data);
        var rel = modules.oRelation;

        rel.update({
            "table":"location_fingerPrint",
            "objectId":request.body.fingerPrintId,
            "data":{
                "wifis":{
                    "__op":"AddRelation",
                    "objects":[{
                        "__type":"Pointer",
                        "className":"wifi",
                        "objectId":dataObject.objectId
                    }]
                }
            }
        },function (err,data) {
            var Respdata = {
                "err":err,
                "data":data
            };
            response.send(JSON.stringify(Respdata));
        });

    });

};
exports.insertWifi = onRequest;