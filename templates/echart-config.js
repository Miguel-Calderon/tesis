/* datos de configuracion para echart*/
          var theme = {
          color: [
              '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
              '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
          ],

          title: {
              itemGap: 12,
              textStyle: {
                  fontWeight: 'normal',
                  color: '#408829'
              }
          },

          dataRange: {
              color: ['#1f610a', '#97b58d']
          },

          toolbox: {
              color: ['#408829', '#408829', '#408829', '#408829']
          },


          tooltip: {
              backgroundColor: 'rgba(0,0,0,0.5)',
              axisPointer: {
                  type: 'line',
                  lineStyle: {
                      color: '#408829',
                      type: 'dashed'
                  },
                  crossStyle: {
                      color: '#408829'
                  },
                  shadowStyle: {
                      color: 'rgba(200,200,200,0.3)'
                  }
              }
          },

          dataZoom: {
              dataBackgroundColor: '#eee',
              fillerColor: 'rgba(64,136,41,0.2)',
              handleColor: '#408829'
          },
          grid: {
              borderWidth: 0
          },

          categoryAxis: {
              axisLine: {
                  lineStyle: {
                      color: '#408829'
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: ['#eee']
                  }
              }
          },

          valueAxis: {
              axisLine: {
                  lineStyle: {
                      color: '#408829'
                  }
              },
              splitArea: {
                  show: true,
                  areaStyle: {
                      color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: ['#eee']
                  }
              }
          },
          timeline: {
              lineStyle: {
                  color: '#408829'
              },
              controlStyle: {
                  normal: {color: '#408829'},
                  emphasis: {color: '#408829'}
              }
          },

          k: {
              itemStyle: {
                  normal: {
                      color: '#68a54a',
                      color0: '#a9cba2',
                      lineStyle: {
                          width: 1,
                          color: '#408829',
                          color0: '#86b379'
                      }
                  }
              }
          },
          map: {
              itemStyle: {
                  normal: {
                      areaStyle: {
                          color: '#ddd'
                      },
                      label: {
                          textStyle: {
                              color: '#c12e34'
                          }
                      }
                  },
                  emphasis: {
                      areaStyle: {
                          color: '#99d2dd'
                      },
                      label: {
                          textStyle: {
                              color: '#c12e34'
                          }
                      }
                  }
              }
          },
          force: {
              itemStyle: {
                  normal: {
                      linkStyle: {
                          strokeColor: '#408829'
                      }
                  }
              }
          },
          chord: {
              padding: 4,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          width: 1,
                          color: 'rgba(128, 128, 128, 0.5)'
                      },
                      chordStyle: {
                          lineStyle: {
                              width: 1,
                              color: 'rgba(128, 128, 128, 0.5)'
                          }
                      }
                  },
                  emphasis: {
                      lineStyle: {
                          width: 1,
                          color: 'rgba(128, 128, 128, 0.5)'
                      },
                      chordStyle: {
                          lineStyle: {
                              width: 1,
                              color: 'rgba(128, 128, 128, 0.5)'
                          }
                      }
                  }
              }
          },
          gauge: {
              startAngle: 225,
              endAngle: -45,
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
                      width: 12
                  }
              },
              axisTick: {
                  splitNumber: 15,
                  length: 12,
                  lineStyle: {
                      color: 'auto'
                  }
              },
              axisLabel: {
                  textStyle: {
                      color: 'auto'
                  }
              },
              splitLine: {
                  length: 18,
                  lineStyle: {
                      color: 'auto'
                  }
              },
              pointer: {
                  length: '90%',
                  color: 'auto'
              },
              title: {
                  textStyle: {
                      color: '#333'
                  }
              },
              detail: {
                  textStyle: {
                      color: 'auto'
                  }
              }
          },
          textStyle: {
              fontFamily: 'Arial, Verdana, sans-serif'
          }
      };

    var echartLine = echarts.init(document.getElementById('echart_line'), theme);

    echartLine.setOption({
      title: {
        text: 'Consumo  Total anual',
        subtext: '2015'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        x: 320,
        y: 40,
        data: ['Punta', 'Valle', 'Resto']
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {
            show: true,
            title: {
              line: 'Line',
              bar: 'Bar',
              stack: 'Stack',
              tiled: 'Tiled'
            },
            type: ['line', 'bar', 'stack', 'tiled']
          },
          restore: {
            show: true,
            title: "Restore"
          },
          saveAsImage: {
            show: true,
            title: "Save Image"
          }
        }
      },
      calculable: true,
      xAxis: [{
        type: 'category',
          axisLabel:{interval:0},
        boundaryGap: false,

        data: ['{{mes}}', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      }],
      yAxis: [{
        type: 'value',
        axisLabel : {
              formatter: '{value} Kw'
          }
      }],
      series: [{
        name: 'Punta',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },

        data: [43023.76,52981.68,58055.08,59915.96,65232.07,61583.33,50136.52,56485.08,66132.32,60461.52,63605.11,38584.68]
      }, {
        name: 'Valle',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [40549.40,46804.84,46629.52,47980.04,51771.87,49838.01,44844.28,49984.04,52659.33,49078.36,48763.67,25450.00]
      }, {
        name: 'Resto',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [184106.64,323287.56,336347.12,377411.84,432829.50,394988.14,332747.28,335400.40,422235.19,404781.60,420298.56,89930.00]
      }]
    });
