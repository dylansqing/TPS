/*id为easyui控件的id*/
// var self = this;
//初始化表头
$("#" + id).datagrid({
  columns: [
    [
      { field: "equName", title: "设备名称", width: 100, align: "center" },
      { field: "equCode", title: "设备编号", width: 100, align: "center" },
      { field: "equType", title: "设备类型", width: 100, align: "center" },
      { field: "department", title: "持有部门", width: 100, align: "center" },
      { field: "insTime", title: "安装时间", width: 100, align: "center" },
      { field: "supplier", title: "供货单位", width: 100, align: "center" },
      { field: "person", title: "负责人", width: 100, align: "center" },
      {
        field: "action",
        title: "操作",
        width: 100,
        align: "center",
        formatter: function showPicture(value, row, index) {
          //这里的value是数据data中的图片名称，index是表格中的行号，row是行数据
          var str =
            " <a name=opera class=easyui-linkbutton></a> <a name1=opera1 class=easyui-linkbutton></a>";
          return str;
        }
      }
    ]
  ],
  data:[
      {}
      {}
  ],
  onLoadSuccess: function() {
    $("a[name=opera]")
      .linkbutton({
        plain: true,
        text: "删除"
      })
      .css({
        color: "rgba(154,205,255,1)"
      })
      .bind("click", function() {
        sessionStorage.setItem("zhks_type", "delete");
        ShowPage("", 2);
      });
    $("a[name1=opera1]")
      .linkbutton({
        plain: true,
        text: "修改"
      })
      .css({
        color: "rgba(154,205,255,1)"
      })
      .bind("click", function() {
        sessionStorage.setItem("zhks_type", "edit");
        ShowPage("设备台账添加", 2);
      });
  }
});



option = {
	"backgroundColor": "",
	"title": [
		{
			"text": "产量进度",
			"textStyle": {
				"color": "#A3E2F4"
			}
		},
		{
			"text": "日完成率",
			"left": "16.66%",
			"top": "72%",
			"textAlign": "center",
			"textStyle": {
				"fontSize": "20",
				"fontWeight": "600",
				"color": "rgba(251, 200, 79, 1)",
				"textAlign": "center"
			}
		},
		{
			"text": "月完成率",
			"left": "49.99%",
			"top": "72%",
			"textAlign": "center",
			"textStyle": {
				"fontSize": "20",
				"fontWeight": "600",
				"color": "rgba(232, 85, 63, 1)",
				"textAlign": "center"
			}
		},
		{
			"text": "年完成率",
			"left": "83.32%",
			"top": "72%",
			"textAlign": "center",
			"textStyle": {
				"fontSize": "20",
				"fontWeight": "600",
				"color": "rgba(89, 180, 157, 1)",
				"textAlign": "center"
			}
		}
	],
	"series": [
		{
			"name": "统计",
			"type": "gauge",
			"radius": "25%",
			"startAngle": 0,
			"endAngle": 360,
			"center": [
				"16.66%",
				"50%"
			],
			"axisLine": {
				"show": false,
				"lineStyle": {
					"width": 30,
					"shadowBlur": 0,
					"color": [
						[
							0,
							"#00323C"
						],
						[
							1,
							"#00323C"
						]
					]
				}
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "auto",
					"width": 3
				},
				"length": -10,
				"splitNumber": 8
			},
			"splitLine": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"pointer": {
				"show": false
			},
			"detail": {
				"show": false
			}
		},
		{
			"type": "gauge",
			"radius": "35%",
			"center": [
				"16.66%",
				"50%"
			],
			"splitNumber": 0,
			"startAngle": 225,
			"endAngle": -45,
			"axisLine": {
				"show": true,
				"lineStyle": {
					"width": 10,
					"color": [
						[
							"0.50",
							{
								"x": 0,
								"y": 0,
								"x2": 1,
								"y2": 0,
								"type": "linear",
								"global": false,
								"colorStops": [
									{
										"offset": 0,
										"color": "#1E85E6"
									},
									{
										"offset": 1,
										"color": "#38F0C8"
									}
								]
							}
						],
						[
							1,
							"#00323C"
						]
					]
				},
				"radius": 10
			},
			"splitLine": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"pointer": {
				"show": false
			},
			"title": {
				"show": true,
				"offsetCenter": [
					0,
					"-30%"
				],
				"textStyle": {
					"color": "#fff",
					"fontSize": 20
				}
			},
			"detail": {
				"show": true,
				"offsetCenter": [
					0,
					"0%"
				],
				"color": "#fff",
				"size": 20,
				"formatter": function(params) {
                    return params + '%'
                },
				"textStyle": {
					"fontSize": 22
				}
			},
			"data": [
				{
					"value": 106
				}
			]
		},
		{
			"name": "统计",
			"type": "gauge",
			"radius": "25%",
			"startAngle": 0,
			"endAngle": 360,
			"center": [
				"49.99%",
				"50%"
			],
			"axisLine": {
				"show": false,
				"lineStyle": {
					"width": 10,
					"shadowBlur": 0,
					"color": [
						[
							0,
							"#00323C"
						],
						[
							1,
							"#00323C"
						]
					]
				}
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "auto",
					"width": 3
				},
				"length": -10,
				"splitNumber": 8
			},
			"splitLine": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"pointer": {
				"show": false
			},
			"detail": {
				"show": false
			}
		},
		{
			"type": "gauge",
			"radius": "35%",
			"center": [
				"49.99%",
				"50%"
			],
			"splitNumber": 0,
			"startAngle": 225,
			"endAngle": -45,
			"axisLine": {
				"show": true,
				"lineStyle": {
					"width": 10,
					"color": [
						[
							"0.50",
							{
								"x": 0,
								"y": 0,
								"x2": 1,
								"y2": 0,
								"type": "linear",
								"global": false,
								"colorStops": [
									{
										"offset": 0,
										"color": "#1E85E6"
									},
									{
										"offset": 1,
										"color": "#38F0C8"
									}
								]
							}
						],
						[
							1,
							"#00323C"
						]
					]
				},
				"radius": 8
			},
			"splitLine": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"pointer": {
				"show": false
			},
			"title": {
				"show": true,
				"offsetCenter": [
					0,
					"-30%"
				],
				"textStyle": {
					"color": "#fff",
					"fontSize": 20
				}
			},
			"detail": {
				"show": true,
				"offsetCenter": [
					0,
					"0%"
				],
				"color": "#fff",
				"size": 20,
				"formatter": function(params) {
                    return params + '%'
                },
				"textStyle": {
					"fontSize": 22
				}
			},
			"data": [
				{
					"value": 70
				}
			]
		},
		{
			"name": "统计",
			"type": "gauge",
			"radius": "25%",
			"startAngle": 0,
			"endAngle": 360,
			"center": [
				"83.32%",
				"50%"
			],
			"axisLine": {
				"show": false,
				"lineStyle": {
					"width": 10,
					"shadowBlur": 0,
					"color": [
						[
							0,
							"#00323C"
						],
						[
							1,
							"#00323C"
						]
					]
				}
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "auto",
					"width": 3
				},
				"length": -10,
				"splitNumber": 8
			},
			"splitLine": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"pointer": {
				"show": false
			},
			"detail": {
				"show": false
			}
		},
		{
			"type": "gauge",
			"radius": "35%",
			"center": [
				"83.32%",
				"50%"
			],
			"splitNumber": 0,
			"startAngle": 225,
			"endAngle": -45,
			"axisLine": {
				"show": true,
				"lineStyle": {
					"width": 10,
					"color": [
						[
							"0.50",
							{
								"x": 0,
								"y": 0,
								"x2": 1,
								"y2": 0,
								"type": "linear",
								"global": false,
								"colorStops": [
									{
										"offset": 0,
										"color": "#1E85E6"
									},
									{
										"offset": 1,
										"color": "#38F0C8"
									}
								]
							}
						],
						[
							1,
							"#00323C"
						]
					]
				},
				"radius": 10
			},
			"splitLine": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"pointer": {
				"show": false
			},
			"title": {
				"show": true,
				"offsetCenter": [
					0,
					"-30%"
				],
				"textStyle": {
					"color": "#fff",
					"fontSize": 20
				}
			},
			"detail": {
				"show": true,
				"offsetCenter": [
					0,
					"0%"
				],
				"color": "#fff",
				"size": 20,
				"formatter": function(params) {
                    return params + '%'
                },
				"textStyle": {
					"fontSize": 22
				}
			},
			"data": [
				{
					"value": 99
				}
			]
		}
	]
};




function initMap() {
	var dive = DockingLayout1.thisElement;
  //   div.classList.add("container");
	let elm = document.createElement('div')
	elm.id = "container";
	dive.appendChild(elm)

	var map = new BMap.Map("container");
	var Point = new BMap.Point(109.2407285, 26.65733161);
	map.centerAndZoom(Point, 15);
	var tablezoom = 7;
	map.enableScrollWheelZoom();
	var MousePointing = 0;
  
	map.setMapStyle({
	  style: "midnight"
	});
	
	setMapCss()
}