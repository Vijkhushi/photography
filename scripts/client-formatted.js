(self.webpackChunk_N_E=self.webpackChunk_N_E||[
  
]).push([
  [
    931
  ],{
    9127:function(e,t,a){
      Promise.resolve().then(a.bind(a,9957))
    },9957:function(e,t,a){
      "use strict";
      a.r(t),a.d(t,{
        default:function(){
          return B
        }
      });
      var s=a(7437),i=a(2265),n=a(3e3),r=a(1057),l=a(1195),o=a(6848),c=a(4986),d=a(6818);
      let x=null;
      function m(){
        let e=arguments.length>0&&void 0!==arguments[
          0
        ]?arguments[
          0
        ]:800,t=arguments.length>1&&void 0!==arguments[
          1
        ]?arguments[
          1
        ]:.03,a=arguments.length>2&&void 0!==arguments[
          2
        ]?arguments[
          2
        ]:.05;
        try{
          let s=function(){
            if(!x){
              let e=window.AudioContext||window.webkitAudioContext;
              e&&(x=new e)
            }return x&&"suspended"===x.state&&x.resume(),x
          }();
          if(!s)return;
          let i=s.createOscillator(),n=s.createGain();
          i.type="sine",i.frequency.setValueAtTime(e,s.currentTime),i.frequency.exponentialRampToValueAtTime(120,s.currentTime+t),n.gain.setValueAtTime(a,s.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+t),i.connect(n),n.connect(s.destination),i.start(),i.stop(s.currentTime+t)
        }catch(e){
          
        }
      }let h=e=>{
        let{
          onOpenSpecs:t,onOpenInquiry:a
        }=e,[
          x,h
        ]=(0,i.useState)(!1),[
          u,p
        ]=(0,i.useState)(!1),[
          f,b
        ]=(0,i.useState)(!0);
        (0,i.useEffect)(()=>{
          let e=()=>{
            h(window.scrollY>40)
          };
          return window.addEventListener("scroll",e,{
            passive:!0
          }),()=>window.removeEventListener("scroll",e)
        },[
          
        ]);
        let g=e=>{
          f&&m(700,.02,.04),p(!1);
          let t=document.getElementById(e);
          t&&t.scrollIntoView({
            behavior:"smooth"
          })
        };
        return(0,s.jsxs)(s.Fragment,{
          children:[
            (0,s.jsx)("header",{
              className:"fixed top-0 left-0 w-full z-40 transition-all duration-500 select-none ".concat(x?"bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl":"bg-transparent py-5"),children:(0,s.jsxs)("div",{
                className:"max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between",children:[
                  (0,s.jsxs)("button",{
                    onClick:()=>g("hero-camera"),className:"flex items-center gap-3 group text-left",children:[
                      (0,s.jsx)("div",{
                        className:"w-6 h-6 rounded border border-white/30 flex items-center justify-center group-hover:border-white transition-colors",children:(0,s.jsx)("span",{
                          className:"w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"
                        })
                      }),(0,s.jsxs)("div",{
                        className:"flex flex-col",children:[
                          (0,s.jsx)("span",{
                            className:"text-xs font-bold tracking-cinema text-white uppercase leading-none",children:"KRONOS"
                          }),(0,s.jsx)("span",{
                            className:"text-[9px] font-mono tracking-widest text-neutral-400 leading-tight",children:"CINEMA LABS"
                          })
                        ]
                      })
                    ]
                  }),(0,s.jsxs)("nav",{
                    className:"hidden md:flex items-center gap-8 lg:gap-10",children:[
                      (0,s.jsx)("button",{
                        onClick:()=>g("hero-camera"),className:"text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white uppercase transition-colors",children:"CAMERA"
                      }),(0,s.jsx)("button",{
                        onClick:()=>g("engineered"),className:"text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white uppercase transition-colors",children:"TECHNOLOGY"
                      }),(0,s.jsx)("button",{
                        onClick:()=>g("art-of-frame"),className:"text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white uppercase transition-colors",children:"ENGINEERING"
                      }),(0,s.jsxs)("button",{
                        onClick:()=>{
                          f&&m(850,.03,.05),t()
                        },className:"text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white uppercase transition-colors flex items-center gap-1.5",children:[
                          (0,s.jsx)(n.Z,{
                            size:11,className:"text-white/60"
                          }),"SPECS"
                        ]
                      })
                    ]
                  }),(0,s.jsxs)("div",{
                    className:"hidden md:flex items-center gap-4",children:[
                      (0,s.jsx)("button",{
                        onClick:()=>{
                          f||m(900,.04,.08),b(!f)
                        },title:f?"Mute UI sounds":"Enable UI sounds",className:"p-2 rounded-full text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors",children:f?(0,s.jsx)(r.Z,{
                          size:15
                        }):(0,s.jsx)(l.Z,{
                          size:15
                        })
                      }),(0,s.jsx)("button",{
                        onClick:()=>{
                          f&&m(1100,.04,.08),a()
                        },className:"relative group px-5 py-2 rounded-full overflow-hidden text-[11px] font-mono tracking-cinema uppercase text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/50 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]",children:(0,s.jsxs)("span",{
                          className:"relative z-10 flex items-center gap-2",children:[
                            "EXPLORE CAMERA",(0,s.jsx)(o.Z,{
                              size:12,className:"group-hover:translate-x-0.5 transition-transform"
                            })
                          ]
                        })
                      })
                    ]
                  }),(0,s.jsx)("button",{
                    onClick:()=>p(!u),className:"md:hidden p-2 text-white/80 hover:text-white transition-colors","aria-label":"Toggle Navigation Menu",children:u?(0,s.jsx)(c.Z,{
                      size:22
                    }):(0,s.jsx)(d.Z,{
                      size:22
                    })
                  })
                ]
              })
            }),u&&(0,s.jsxs)("div",{
              className:"fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-2xl md:hidden pt-24 px-8 pb-12 flex flex-col justify-between animate-in fade-in duration-200",children:[
                (0,s.jsxs)("div",{
                  className:"flex flex-col gap-6",children:[
                    (0,s.jsx)("button",{
                      onClick:()=>g("hero-camera"),className:"text-left text-lg font-mono tracking-widest text-white/80 hover:text-white py-2 border-b border-white/[0.08]",children:"01 // CAMERA"
                    }),(0,s.jsx)("button",{
                      onClick:()=>g("engineered"),className:"text-left text-lg font-mono tracking-widest text-white/80 hover:text-white py-2 border-b border-white/[0.08]",children:"02 // TECHNOLOGY"
                    }),(0,s.jsx)("button",{
                      onClick:()=>g("art-of-frame"),className:"text-left text-lg font-mono tracking-widest text-white/80 hover:text-white py-2 border-b border-white/[0.08]",children:"03 // ENGINEERING"
                    }),(0,s.jsx)("button",{
                      onClick:()=>{
                        p(!1),t()
                      },className:"text-left text-lg font-mono tracking-widest text-white/80 hover:text-white py-2 border-b border-white/[0.08]",children:"04 // TECHNICAL SPECS"
                    })
                  ]
                }),(0,s.jsxs)("div",{
                  className:"flex flex-col gap-4",children:[
                    (0,s.jsx)("button",{
                      onClick:()=>{
                        p(!1),a()
                      },className:"w-full py-3.5 rounded-full text-center text-xs font-mono tracking-cinema uppercase text-black bg-white font-bold",children:"EXPLORE CAMERA"
                    }),(0,s.jsx)("p",{
                      className:"text-[10px] font-mono text-center text-white/30 tracking-widest",children:"KRONOS 8K CINE // PRODUCTION READY"
                    })
                  ]
                })
              ]
            })
          ]
        })
      };
      var u=a(6498),p=a(9498);
      let f=e=>{
        let{
          currentFrame:t,images:a,isLoaded:n,className:r=""
        }=e,l=(0,i.useRef)(null),o=(0,i.useRef)(null),c=(0,i.useRef)(-1),d=(0,i.useCallback)(e=>{
          let t=l.current;
          if(!t)return;
          let s=t.getContext("2d",{
            alpha:!0
          });
          if(!s)return;
          let i=Math.max(0,Math.min(e,a.length-1)),n=a[
            i
          ];
          if(n&&n.complete&&0!==n.naturalWidth||(n=a[
            0
          ]),!n||!n.complete||0===n.naturalWidth)return;
          let r=Math.min(window.devicePixelRatio||1,2),o=t.clientWidth,d=t.clientHeight,x=Math.round(o*r),m=Math.round(d*r);
          (t.width!==x||t.height!==m)&&(t.width=x,t.height=m),s.clearRect(0,0,t.width,t.height),s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high";
          let h=(n.naturalWidth||1920)/(n.naturalHeight||1080),u=t.width/t.height,p=t.width,f=t.height,b=0,g=0;
          u>h?(p=(f=t.height)*h,b=(t.width-p)/2,g=0):(f=(p=t.width)/h,b=0,g=(t.height-f)/2),s.drawImage(n,b,g,p,f),c.current=i
        },[
          a
        ]);
        return(0,i.useEffect)(()=>(o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>{
          d(t)
        }),()=>{
          o.current&&cancelAnimationFrame(o.current)
        }),[
          t,n,d
        ]),(0,i.useEffect)(()=>{
          let e=()=>{
            l.current&&d(t)
          };
          return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)
        },[
          t,d
        ]),(0,s.jsx)("div",{
          className:"relative flex items-center justify-center pointer-events-none select-none ".concat(r),children:(0,s.jsx)("canvas",{
            ref:l,className:"w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]",style:{
              width:"100%",height:"100%"
            }
          })
        })
      },b=e=>{
        let{
          scrollProgress:t,frameIndex:a
        }=e,i=a>=40&&a<=80?Math.sin((a-40)/40*Math.PI):0,n=a>=105,r=n?(a-105)/15:0,l=.2+.4*i+.3*r;
        return(0,s.jsxs)("div",{
          className:"absolute inset-0 pointer-events-none overflow-hidden select-none",children:[
            (0,s.jsx)("div",{
              className:"absolute inset-0",style:{
                background:"\n            radial-gradient(\n              circle at 50% 50%,\n              rgba(38, 43, 54, ".concat(.35+.2*i,") 0%,\n              rgba(18, 20, 24, 0.6) 35%,\n              rgba(8, 9, 10, 0.95) 70%,\n              #050505 100%\n            )\n          ")
              }
            }),(0,s.jsx)("div",{
              className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 ease-out",style:{
                width:"min(60vw, 850px)",height:"min(60vw, 850px)",background:n?"radial-gradient(circle, rgba(212, 180, 130, ".concat(.15*l,") 0%, rgba(130, 170, 220, ").concat(.1*l,") 40%, transparent 70%)"):"radial-gradient(circle, rgba(255, 255, 255, ".concat(.18*l,") 0%, rgba(100, 140, 190, ").concat(.08*l,") 45%, transparent 75%)"),filter:"blur(70px)",transform:"translate(-50%, -50%) scale(".concat(1+.25*i+.15*r,")"),opacity:l
              }
            }),(0,s.jsx)("div",{
              className:"absolute top-1/3 -left-[10vw] w-[40vw] h-[30vh] rounded-full opacity-20 filter blur-[90px]",style:{
                background:"radial-gradient(circle, rgba(80, 110, 160, 0.4) 0%, transparent 70%)",transform:"translateY(".concat(40*t,"px)")
              }
            }),(0,s.jsx)("div",{
              className:"absolute bottom-1/4 -right-[10vw] w-[40vw] h-[30vh] rounded-full opacity-15 filter blur-[90px]",style:{
                background:"radial-gradient(circle, rgba(140, 110, 80, 0.3) 0%, transparent 70%)",transform:"translateY(".concat(-(40*t),"px)")
              }
            }),(0,s.jsx)("div",{
              className:"absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
            }),(0,s.jsx)("div",{
              className:"absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]"
            })
          ]
        })
      },g=e=>{
        let{
          scrollProgress:t,count:a=36,className:n=""
        }=e,r=(0,i.useRef)(null),l=(0,i.useRef)([
          
        ]),o=(0,i.useRef)(t);
        return o.current=t,(0,i.useEffect)(()=>{
          let e;
          let t=r.current;
          if(!t)return;
          let s=t.getContext("2d");
          if(!s)return;
          let i=t.width=window.innerWidth,n=t.height=window.innerHeight,c=[
            
          ];
          for(let e=0;
          e<a;
          e++)c.push({
            x:Math.random()*i,y:Math.random()*n,size:1.6*Math.random()+.4,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.2-.05,baseOpacity:.35*Math.random()+.1,opacity:.35*Math.random()+.1,pulseSpeed:.02*Math.random()+.008,phase:Math.random()*Math.PI*2,parallaxFactor:(Math.random()-.5)*120
          });
          l.current=c;
          let d=()=>{
            s.clearRect(0,0,i,n);
            let t=o.current;
            c.forEach(e=>{
              e.x+=e.speedX,e.y+=e.speedY,e.x<0&&(e.x=i),e.x>i&&(e.x=0),e.y<0&&(e.y=n),e.y>n&&(e.y=0),e.phase+=e.pulseSpeed,e.opacity=e.baseOpacity*(.7+.3*Math.sin(e.phase));
              let a=e.y+t*e.parallaxFactor;
              s.beginPath(),s.arc(e.x,a,e.size,0,2*Math.PI),s.fillStyle="rgba(220, 230, 250, ".concat(e.opacity,")"),s.shadowColor="rgba(255, 255, 255, 0.4)",s.shadowBlur=4,s.fill(),s.shadowBlur=0
            }),e=requestAnimationFrame(d)
          };
          d();
          let x=()=>{
            t&&(i=t.width=window.innerWidth,n=t.height=window.innerHeight)
          };
          return window.addEventListener("resize",x),()=>{
            cancelAnimationFrame(e),window.removeEventListener("resize",x)
          }
        },[
          a
        ]),(0,s.jsx)("canvas",{
          ref:r,className:"absolute inset-0 pointer-events-none z-10 ".concat(n)
        })
      },w=[
        {
          id:"stage-1",frameStart:1,frameEnd:24,eyebrow:"PRECISION ENGINEERED",title:"BUILT FOR THE MOMENT.",subtitle:"A new generation of cinematic imaging crafted for visionary filmmakers.",technicalCode:"SYS.INIT // CORE_ONLINE",metrics:[
            {
              label:"SENSOR TYPE",value:"8K FULL-FRAME"
            },{
              label:"CHASSIS",value:"CARBON-MAGNESIUM"
            }
          ]
        },{
          id:"stage-2",frameStart:25,frameEnd:54,eyebrow:"MODULAR ARCHITECTURE",title:"EVERY DETAIL MATTERS.",subtitle:"Engineered from the molecular level up. Uncompromising precision in every mechanical interface.",technicalCode:"EXPLODED_VIEW // TOLERANCE: \xb10.002mm",metrics:[
            {
              label:"COMPONENTS",value:"1,420 PARTS"
            },{
              label:"MOUNT INTERFACE",value:"POSITIVE LOCK PL"
            }
          ]
        },{
          id:"stage-3",frameStart:55,frameEnd:84,eyebrow:"OPTICAL REFLECTION & THERMALS",title:"OPTICS. REFINED.",subtitle:"Dual-fan active thermal chamber enables continuous unthrottled 8K 120FPS RAW capture.",technicalCode:"THERMAL_DISSIPATION // 48W CONTINUOUS",metrics:[
            {
              label:"COOLING NOISE",value:"< 14 dBA SILENT"
            },{
              label:"DYNAMIC RANGE",value:"16.5+ STOPS"
            }
          ]
        },{
          id:"stage-4",frameStart:85,frameEnd:109,eyebrow:"COLOR SCIENCE & SPEED",title:"BUILT FOR CINEMA.",subtitle:"16-bit linear color pipeline with zero-latency hardware ProRes & CinemaRAW encoding.",technicalCode:"CODEC_PIPELINE // 16-BIT UNCOMPRESSED",metrics:[
            {
              label:"DUAL NATIVE ISO",value:"800 / 3200"
            },{
              label:"DATA RATE",value:"3.2 Gbps RAW"
            }
          ]
        },{
          id:"stage-5",frameStart:110,frameEnd:120,eyebrow:"THE BENCHMARK",title:"THE NEXT FRAME.",subtitle:"A masterpiece in motion. Ready for extreme environments and the grandest productions.",technicalCode:"SYSTEM // LOCKED & ARMED",metrics:[
            {
              label:"RESOLUTION",value:"8192 \xd7 4320"
            },{
              label:"STATUS",value:"PRODUCTION READY"
            }
          ]
        }
      ],N=[
        {
          id:"sensor",name:"8K Full-Frame CMOS Sensor",description:"Custom backlit silicon featuring 16.5+ stops of dynamic range and ultra-fast global shutter-like readout.",category:"IMAGING CORE",x:53,y:54,visibleFrameStart:45,visibleFrameEnd:78
        },{
          id:"cooling",name:"Aero-Flow Thermal Heatsink",description:"Ultra-quiet magnetic levitation intake with liquid-vapor heatpipe chamber for continuous 48W heat dispersal.",category:"THERMAL",x:30,y:72,visibleFrameStart:50,visibleFrameEnd:75
        },{
          id:"motherboard",name:"Neural Processing Engine",description:"Dual FPGA image pipeline providing real-time debayering, anamorphic de-squeeze, and ACES color grading.",category:"PROCESSING",x:69,y:52,visibleFrameStart:48,visibleFrameEnd:76
        },{
          id:"optics-mount",name:"Titanium Positive-Lock PL Mount",description:"Sub-micron optical alignment with Cook/i and LDS-2 lens metadata passthrough pins.",category:"OPTOMECHANICAL",x:15,y:52,visibleFrameStart:46,visibleFrameEnd:74
        },{
          id:"viewfinder",name:"OLED High-Nit Viewfinder Housing",description:"0.7-inch 4K Micro-OLED viewfinder with 120Hz refresh rate and 100% DCI-P3 gamut accuracy.",category:"MONITORING",x:73,y:22,visibleFrameStart:48,visibleFrameEnd:75
        }
      ],v=[
        {
          category:"Sensor & Imaging",specs:[
            {
              name:"Sensor Type",value:"35.4MP Full-Frame Cinema CMOS (36.0 \xd7 24.0 mm)"
            },{
              name:"Active Pixels",value:"8192 \xd7 4320 (8K DCI)"
            },{
              name:"Dynamic Range",value:"16.5+ stops at ISO 800 / 3200"
            },{
              name:"Dual Base ISO",value:"Base 800 (Clean) / Base 3200 (Low Light)"
            },{
              name:"Color Filter Array",value:"Custom Wide Gamut RGB with Optical Low-Pass Filter"
            },{
              name:"Shutter Type",value:"Electronic Global-Sync Shutter (1/1 to 1/8000s)"
            }
          ]
        },{
          category:"Recording & Formats",specs:[
            {
              name:"Internal RAW",value:"16-bit CinemaRAW Uncompressed & Compressed (3:1, 5:1, 8:1)"
            },{
              name:"Industry Codecs",value:"Apple ProRes 4444 XQ, ProRes 422 HQ, Avid DNxHR"
            },{
              name:"Max Frame Rates",value:"8K DCI up to 120 fps / 4K DCI up to 240 fps / 2K up to 480 fps"
            },{
              name:"Media Slots",value:"Dual CFexpress Type B (PCIe 4.0 up to 4000 MB/s)"
            },{
              name:"Color Spaces",value:"ACES 1.3, Kronos-Gamut / K-Log3, Rec.2020, Rec.709"
            }
          ]
        },{
          category:"Optics & Mechanical",specs:[
            {
              name:"Lens Mount",value:"Interchangeable Titanium PL Mount (EF, L-Mount, E-Mount swappable)"
            },{
              name:"Lens Data",value:"Cooke /i Technology, Zeiss eXtended Data, ARRI LDS-2"
            },{
              name:"Internal ND",value:"Motorized Optical Clear + 2 to 7 stops Electronic Variable ND"
            },{
              name:"Chassis Material",value:"Magnesium-Aluminum Monocoque with Carbon-Fiber Inlays"
            },{
              name:"Thermal System",value:"Sealed Cold-Cavity Liquid-Vapor Chamber with Silent MagLev Fan"
            },{
              name:"Weight & Dims",value:"1.92 kg (4.23 lbs) body only | 148 \xd7 152 \xd7 180 mm"
            }
          ]
        },{
          category:"Connectivity & Audio",specs:[
            {
              name:"Video Output",value:"2\xd7 12G-SDI (4K 60p 10-bit), 1\xd7 Full-Size HDMI 2.1"
            },{
              name:"Audio Inputs",value:"2\xd7 XLR 3-pin with +48V Phantom Power, 32-bit float internal ADC"
            },{
              name:"Timecode & Genlock",value:"BNC Timecode In/Out, BNC Genlock / Tri-Level Sync"
            },{
              name:"Remote & Control",value:"Gigabit Ethernet RJ45, USB-C 3.2 Gen 2, Wi-Fi 6E, Bluetooth 5.3"
            },{
              name:"Power System",value:"Standard V-Mount / Gold-Mount plate + 4-pin XLR 12-28V DC input"
            }
          ]
        }
      ],j=[
        {
          id:"optics",tag:"01 // OPTICAL PURITY",title:"OPTICS",tagline:"Sub-micron optical alignment with zero aberration.",description:"Crafted with hand-polished fluorite elements and multi-layer nano-coatings, delivering unprecedented micro-contrast, organic skin tones, and controlled anamorphic streak flares.",stats:[
            {
              label:"TRANSMISSION",value:"T1.4 MAXIMUM"
            },{
              label:"FLARE CONTROL",value:"NANO AR COATING"
            }
          ]
        },{
          id:"control",tag:"02 // TACTILE ERGONOMICS",title:"CONTROL",tagline:"Intuitive cinema ergonomics with physical precision dials.",description:"Every knurled knob and tactile switch is weighted for muscle memory operation in pitch-black studio or harsh field conditions. Direct access to shutter angle, ISO, and false color overlays.",stats:[
            {
              label:"RESPONSE TIME",value:"< 2ms LATENCY"
            },{
              label:"PRESETS",value:"12 USER BANKS"
            }
          ]
        },{
          id:"performance",tag:"03 // HARSH PRODUCTION",title:"PERFORMANCE",tagline:"Continuous 8K RAW recording without thermal throttling.",description:"A dual-zone sealed magnesium chassis isolates all sensitive electronics from moisture, dust, and sand while directing high-output thermal dissipation through an isolated exhaust channel.",stats:[
            {
              label:"WEATHER SEAL",value:"IP54 RATED"
            },{
              label:"OPERATING TEMP",value:"-20\xb0C TO +50\xb0C"
            }
          ]
        }
      ],E=e=>{
        let{
          currentFrame:t,scrollProgress:a
        }=e,i=t+1;
        return(0,s.jsxs)("div",{
          className:"absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 md:p-12 lg:p-16 select-none",children:[
            (0,s.jsxs)("div",{
              className:"flex items-center justify-between text-xs tracking-cinema text-neutral-500 font-mono pt-16 md:pt-14",children:[
                (0,s.jsxs)("div",{
                  className:"flex items-center gap-3",children:[
                    (0,s.jsx)("span",{
                      className:"inline-block w-1.5 h-1.5 rounded-full bg-cinema-rec animate-ping"
                    }),(0,s.jsx)("span",{
                      className:"text-white/80 font-medium tracking-widest",children:"KRONOS // CAM_A"
                    }),(0,s.jsx)("span",{
                      className:"hidden sm:inline-block text-white/30",children:"|"
                    }),(0,s.jsx)("span",{
                      className:"hidden sm:inline-block text-white/50",children:"8K RAW 12-BIT"
                    })
                  ]
                }),(0,s.jsxs)("div",{
                  className:"flex items-center gap-4",children:[
                    (0,s.jsx)("span",{
                      className:"text-white/40 hidden md:inline",children:"SEQUENCE SCRUB:"
                    }),(0,s.jsxs)("span",{
                      className:"text-white font-mono bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.08] backdrop-blur-md",children:[
                        "FRM ",String(i).padStart(3,"0")," / 120"
                      ]
                    })
                  ]
                })
              ]
            }),(0,s.jsx)("div",{
              className:"relative w-full h-[60vh] max-h-[700px] flex items-center justify-start my-auto",children:w.map(e=>{
                let t=i>=e.frameStart&&i<=e.frameEnd,a=0,n=20,r=10,l=.96;
                if(t){
                  let t=e.frameEnd-e.frameStart,s=(i-e.frameStart)/t;
                  if(s<.15){
                    let e=s/.15;
                    a=e,n=16*(1-e),r=8*(1-e),l=.96+.04*e
                  }else if(s>.85){
                    let e=(1-s)/.15;
                    a=e,n=-12*(1-e),r=6*(1-e),l=1-.02*(1-e)
                  }else a=1,n=0,r=0,l=1
                }return t||0!==a?(0,s.jsxs)("div",{
                  className:"absolute left-0 top-1/2 -translate-y-1/2 max-w-xl transition-all duration-300 ease-out",style:{
                    opacity:a,transform:"translateY(".concat(n,"px) scale(").concat(l,")"),filter:"blur(".concat(r,"px)")
                  },children:[
                    (0,s.jsxs)("div",{
                      className:"flex items-center gap-2 mb-3",children:[
                        (0,s.jsx)("span",{
                          className:"h-[1px] w-6 bg-white/40"
                        }),(0,s.jsx)("span",{
                          className:"text-[11px] font-mono tracking-cinema text-white/70 uppercase",children:e.eyebrow
                        }),(0,s.jsxs)("span",{
                          className:"text-[9px] font-mono text-white/30 hidden sm:inline",children:[
                            "[",e.technicalCode,"]"
                          ]
                        })
                      ]
                    }),(0,s.jsx)("h1",{
                      className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]",children:e.title
                    }),(0,s.jsx)("p",{
                      className:"text-sm sm:text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-md mb-6 drop-shadow-md",children:e.subtitle
                    }),e.metrics&&(0,s.jsx)("div",{
                      className:"flex flex-wrap gap-2.5 pt-1",children:e.metrics.map((e,t)=>(0,s.jsxs)("div",{
                        className:"px-3 py-1.5 rounded bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-center gap-2",children:[
                          (0,s.jsxs)("span",{
                            className:"text-[10px] font-mono tracking-wider text-neutral-400",children:[
                              e.label,":"
                            ]
                          }),(0,s.jsx)("span",{
                            className:"text-xs font-mono font-medium text-white",children:e.value
                          })
                        ]
                      },t))
                    })
                  ]
                },e.id):null
              })
            }),(0,s.jsx)("div",{
              className:"flex flex-col items-center justify-center text-center transition-all duration-500 pb-4",style:{
                opacity:Math.max(0,1-5*a),transform:"translateY(".concat(40*a,"px)")
              },children:(0,s.jsxs)("div",{
                className:"flex flex-col items-center gap-2",children:[
                  (0,s.jsx)("span",{
                    className:"text-[10px] font-mono tracking-cinema text-white/60 uppercase",children:"SCROLL TO EXPLORE"
                  }),(0,s.jsx)("div",{
                    className:"w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1",children:(0,s.jsx)("span",{
                      className:"w-1 h-2 rounded-full bg-white/80 animate-bounce"
                    })
                  })
                ]
              })
            })
          ]
        })
      };
      var y=a(9342);
      let S=e=>{
        let{
          currentFrame:t
        }=e,[
          a,n
        ]=(0,i.useState)(null),r=t+1,l=N.filter(e=>r>=e.visibleFrameStart&&r<=e.visibleFrameEnd);
        return 0===l.length?null:(0,s.jsxs)("div",{
          className:"absolute inset-0 pointer-events-auto z-30 select-none",children:[
            l.map(e=>{
              let t=r-e.visibleFrameStart,i=e.visibleFrameEnd-r,l=(null==a?void 0:a.id)===e.id;
              return(0,s.jsxs)("div",{
                className:"absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group",style:{
                  left:"".concat(e.x,"%"),top:"".concat(e.y,"%"),opacity:Math.min(1,Math.min(t,i)/4),transition:"opacity 0.25s ease"
                },onClick:()=>n(l?null:e),children:[
                  (0,s.jsxs)("div",{
                    className:"relative flex items-center justify-center",children:[
                      (0,s.jsx)("span",{
                        className:"absolute w-7 h-7 rounded-full bg-white/10 animate-ping opacity-60 pointer-events-none"
                      }),(0,s.jsx)("span",{
                        className:"absolute w-5 h-5 rounded-full border border-white/40 group-hover:border-white/90 group-hover:scale-110 transition-all duration-300"
                      }),(0,s.jsx)("span",{
                        className:"w-2.5 h-2.5 rounded-full bg-white group-hover:bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all"
                      })
                    ]
                  }),!l&&(0,s.jsx)("div",{
                    className:"absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap",children:(0,s.jsxs)("div",{
                      className:"px-3 py-1.5 rounded bg-black/90 border border-white/20 backdrop-blur-md shadow-2xl flex flex-col items-center",children:[
                        (0,s.jsx)("span",{
                          className:"text-[9px] font-mono tracking-widest text-white/50 uppercase",children:e.category
                        }),(0,s.jsx)("span",{
                          className:"text-xs font-mono font-medium text-white",children:e.name
                        })
                      ]
                    })
                  })
                ]
              },e.id)
            }),a&&(0,s.jsxs)("div",{
              className:"absolute right-6 sm:right-12 bottom-12 sm:bottom-16 max-w-sm w-[90vw] p-5 rounded-xl bg-black/85 border border-white/20 backdrop-blur-xl shadow-2xl z-40 animate-in fade-in zoom-in-95 duration-200",children:[
                (0,s.jsxs)("div",{
                  className:"flex items-start justify-between mb-2",children:[
                    (0,s.jsxs)("span",{
                      className:"text-[10px] font-mono tracking-cinema text-white/60 uppercase",children:[
                        "// ",a.category
                      ]
                    }),(0,s.jsx)("button",{
                      onClick:()=>n(null),className:"p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors",children:(0,s.jsx)(c.Z,{
                        size:14
                      })
                    })
                  ]
                }),(0,s.jsx)("h3",{
                  className:"text-base font-bold text-white mb-2",children:a.name
                }),(0,s.jsx)("p",{
                  className:"text-xs text-neutral-300 font-light leading-relaxed mb-4",children:a.description
                }),(0,s.jsxs)("div",{
                  className:"flex items-center gap-2 text-[10px] font-mono text-white/40 border-t border-white/10 pt-2.5",children:[
                    (0,s.jsx)(y.Z,{
                      size:12
                    }),(0,s.jsx)("span",{
                      children:"SUB-ASSEMBLY INSPECTION OK"
                    })
                  ]
                })
              ]
            })
          ]
        })
      };
      u.ZP.registerPlugin(p.i);
      let C=e=>{
        let{
          preloaderState:t
        }=e,a=(0,i.useRef)(null),n=(0,i.useRef)(null),[
          r,l
        ]=(0,i.useState)(0),[
          o,c
        ]=(0,i.useState)(0);
        return(0,i.useEffect)(()=>{
          if(!a.current||!n.current)return;
          let e=a.current,t=p.i.create({
            trigger:e,start:"top top",end:"bottom bottom",scrub:.6,onUpdate:e=>{
              let t=e.progress;
              c(t),l(Math.min(119,Math.max(0,Math.round(119*t))))
            }
          });
          return()=>{
            t.kill()
          }
        },[
          
        ]),(0,s.jsx)("section",{
          ref:a,id:"hero-camera",className:"relative w-full h-[500vh] bg-[#050505]",children:(0,s.jsxs)("div",{
            ref:n,className:"sticky top-0 left-0 w-full h-screen h-[100dvh] overflow-hidden flex items-center justify-center bg-[#050505]",children:[
              (0,s.jsx)(b,{
                scrollProgress:o,frameIndex:r
              }),(0,s.jsx)(g,{
                scrollProgress:o,count:38
              }),(0,s.jsx)("div",{
                className:"relative z-10 w-full flex items-center justify-center px-4 sm:px-8",children:(0,s.jsxs)("div",{
                  className:"w-[88vw] sm:w-[78vw] md:w-[70vw] lg:w-[60vw] xl:w-[56vw] max-w-[1100px] aspect-[16/9] flex items-center justify-center relative",children:[
                    (0,s.jsx)(f,{
                      currentFrame:r,images:t.images,isLoaded:t.isFirstFrameReady,className:"w-full h-full"
                    }),(0,s.jsx)(S,{
                      currentFrame:r
                    })
                  ]
                })
              }),(0,s.jsx)(E,{
                currentFrame:r,scrollProgress:o
              }),(0,s.jsx)("div",{
                className:"absolute inset-0 pointer-events-none bg-radial-vignette opacity-80"
              })
            ]
          })
        })
      };
      var I=a(6315),O=a(6141),R=a(4287);
      let A={
        sensor:{
          id:"sensor",title:"FULL FRAME SENSOR",badge:"IMAGING CORE",primaryStat:"16.5+ STOPS",secondaryStat:"8K DCI @ 120FPS",description:"A bespoke 35.4MP CMOS architecture featuring dual-gain output circuitry and ultra-fine pixel pitch. Delivers breathtaking latitude in deep shadows and organic specular highlight roll-off.",bullets:[
            "Dual Native ISO at 800 & 3200 for clean shadow response","Sub-millisecond electronic global sync readout","Custom multi-spectral optical low-pass filter (OLPF)"
          ]
        },optics:{
          id:"optics",title:"PRECISION OPTICS",badge:"OPTOMECHANICAL",primaryStat:"\xb10.002mm",secondaryStat:"TITANIUM PL LOCK",description:"Engineered to withstand rigorous cine zooms and high-torque wireless focus motors with zero flange-depth deflection. Includes native electronic passthrough for lens metadata.",bullets:[
            "Interchangeable titanium positive-lock mount design","Cooke /i, Zeiss eXtended Data & ARRI LDS-2 protocols","Integrated electronic variable ND filter (2 to 7 stops)"
          ]
        },control:{
          id:"control",title:"CINEMATIC CONTROL",badge:"OPERATIONAL UI",primaryStat:"< 2ms LATENCY",secondaryStat:"12 USER PRESETS",description:"Tactile knurled aluminum controls designed for blind muscle memory on fast-paced sets. Ultra-responsive touch UI combined with physical hotkeys for critical parameters.",bullets:[
            "Direct mechanical switches for shutter angle and ISO","Full false color, waveform, and anamorphic de-squeeze","Dual 12G-SDI & Genlock for multi-cam studio sync"
          ]
        }
      },T=()=>{
        let[
          e,t
        ]=(0,i.useState)("sensor"),a=A[
          e
        ];
        return(0,s.jsxs)("section",{
          id:"engineered",className:"relative w-full min-h-screen bg-[#050505] text-white py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] overflow-hidden",children:[
            (0,s.jsx)("div",{
              className:"absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[500px] bg-white/[0.02] rounded-full filter blur-[120px] pointer-events-none"
            }),(0,s.jsxs)("div",{
              className:"max-w-7xl mx-auto relative z-10",children:[
                (0,s.jsxs)("div",{
                  className:"flex items-center gap-3 mb-6",children:[
                    (0,s.jsx)("span",{
                      className:"h-[1px] w-8 bg-white/40"
                    }),(0,s.jsx)("span",{
                      className:"text-xs font-mono tracking-cinema text-neutral-400 uppercase",children:"ENGINEERED FOR CINEMA"
                    })
                  ]
                }),(0,s.jsxs)("div",{
                  className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20",children:[
                    (0,s.jsxs)("div",{
                      className:"lg:col-span-6",children:[
                        (0,s.jsx)("h2",{
                          className:"text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6",children:"Every component has a purpose."
                        }),(0,s.jsx)("p",{
                          className:"text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-lg",children:"Born from close collaboration with ASC cinematographers, the KRONOS system redefines optical purity, thermal stability, and sensory tactile control."
                        })
                      ]
                    }),(0,s.jsxs)("div",{
                      className:"lg:col-span-6 flex flex-col justify-between h-full pt-2",children:[
                        (0,s.jsx)("p",{
                          className:"text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8",children:"Precision optics, aerospace mechanical engineering, sensor dynamic range, and uncompromising cinematic image quality come together in a singular, unibody titanium-magnesium chassis."
                        }),(0,s.jsxs)("div",{
                          className:"grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]",children:[
                            (0,s.jsxs)("div",{
                              className:"flex flex-col",children:[
                                (0,s.jsx)("span",{
                                  className:"text-[10px] font-mono text-neutral-500 tracking-wider uppercase",children:"DYNAMIC RANGE"
                                }),(0,s.jsx)("span",{
                                  className:"text-sm font-mono font-semibold text-white mt-1",children:"16.5+ STOPS"
                                })
                              ]
                            }),(0,s.jsxs)("div",{
                              className:"flex flex-col",children:[
                                (0,s.jsx)("span",{
                                  className:"text-[10px] font-mono text-neutral-500 tracking-wider uppercase",children:"RECORDING"
                                }),(0,s.jsx)("span",{
                                  className:"text-sm font-mono font-semibold text-white mt-1",children:"16-BIT RAW"
                                })
                              ]
                            }),(0,s.jsxs)("div",{
                              className:"flex flex-col",children:[
                                (0,s.jsx)("span",{
                                  className:"text-[10px] font-mono text-neutral-500 tracking-wider uppercase",children:"CHASSIS WEIGHT"
                                }),(0,s.jsx)("span",{
                                  className:"text-sm font-mono font-semibold text-white mt-1",children:"1.92 KG"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),(0,s.jsxs)("div",{
                  className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[
                    (0,s.jsxs)("button",{
                      onClick:()=>t("sensor"),className:"p-6 sm:p-8 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ".concat("sensor"===e?"bg-white/[0.08] border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.05)]":"bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06]"),children:[
                        (0,s.jsxs)("div",{
                          className:"flex items-center justify-between mb-4",children:[
                            (0,s.jsx)("span",{
                              className:"text-[10px] font-mono tracking-widest text-neutral-400 uppercase",children:"01 // CORE"
                            }),(0,s.jsx)(I.Z,{
                              size:18,className:"sensor"===e?"text-white":"text-neutral-500"
                            })
                          ]
                        }),(0,s.jsx)("h3",{
                          className:"text-xl font-bold tracking-tight text-white mb-2",children:"FULL FRAME SENSOR"
                        }),(0,s.jsx)("p",{
                          className:"text-xs text-neutral-400 font-light line-clamp-2",children:"35.4MP custom backlit sensor with dual native ISO architecture."
                        }),"sensor"===e&&(0,s.jsx)("div",{
                          className:"absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                        })
                      ]
                    }),(0,s.jsxs)("button",{
                      onClick:()=>t("optics"),className:"p-6 sm:p-8 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ".concat("optics"===e?"bg-white/[0.08] border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.05)]":"bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06]"),children:[
                        (0,s.jsxs)("div",{
                          className:"flex items-center justify-between mb-4",children:[
                            (0,s.jsx)("span",{
                              className:"text-[10px] font-mono tracking-widest text-neutral-400 uppercase",children:"02 // MOUNT"
                            }),(0,s.jsx)(O.Z,{
                              size:18,className:"optics"===e?"text-white":"text-neutral-500"
                            })
                          ]
                        }),(0,s.jsx)("h3",{
                          className:"text-xl font-bold tracking-tight text-white mb-2",children:"PRECISION OPTICS"
                        }),(0,s.jsx)("p",{
                          className:"text-xs text-neutral-400 font-light line-clamp-2",children:"Positive-lock titanium flange with sub-micron tolerance."
                        }),"optics"===e&&(0,s.jsx)("div",{
                          className:"absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                        })
                      ]
                    }),(0,s.jsxs)("button",{
                      onClick:()=>t("control"),className:"p-6 sm:p-8 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ".concat("control"===e?"bg-white/[0.08] border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.05)]":"bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06]"),children:[
                        (0,s.jsxs)("div",{
                          className:"flex items-center justify-between mb-4",children:[
                            (0,s.jsx)("span",{
                              className:"text-[10px] font-mono tracking-widest text-neutral-400 uppercase",children:"03 // INTERFACE"
                            }),(0,s.jsx)(n.Z,{
                              size:18,className:"control"===e?"text-white":"text-neutral-500"
                            })
                          ]
                        }),(0,s.jsx)("h3",{
                          className:"text-xl font-bold tracking-tight text-white mb-2",children:"CINEMATIC CONTROL"
                        }),(0,s.jsx)("p",{
                          className:"text-xs text-neutral-400 font-light line-clamp-2",children:"Tactile physical dials, low-latency UI, and instantaneous recall."
                        }),"control"===e&&(0,s.jsx)("div",{
                          className:"absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                        })
                      ]
                    })
                  ]
                }),(0,s.jsxs)("div",{
                  className:"p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.09] backdrop-blur-xl transition-all duration-300",children:[
                    (0,s.jsxs)("div",{
                      className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]",children:[
                        (0,s.jsxs)("div",{
                          children:[
                            (0,s.jsxs)("span",{
                              className:"text-[10px] font-mono tracking-cinema text-white/50 uppercase",children:[
                                "// ACTIVE SUBSYSTEM: ",a.badge
                              ]
                            }),(0,s.jsx)("h4",{
                              className:"text-2xl sm:text-3xl font-bold text-white mt-1",children:a.title
                            })
                          ]
                        }),(0,s.jsxs)("div",{
                          className:"flex items-center gap-6",children:[
                            (0,s.jsxs)("div",{
                              className:"text-right",children:[
                                (0,s.jsx)("span",{
                                  className:"text-[9px] font-mono text-neutral-400 block tracking-wider",children:"PRIMARY SPEC"
                                }),(0,s.jsx)("span",{
                                  className:"text-base sm:text-lg font-mono font-bold text-white",children:a.primaryStat
                                })
                              ]
                            }),(0,s.jsx)("div",{
                              className:"h-8 w-[1px] bg-white/10"
                            }),(0,s.jsxs)("div",{
                              className:"text-right",children:[
                                (0,s.jsx)("span",{
                                  className:"text-[9px] font-mono text-neutral-400 block tracking-wider",children:"BENCHMARK"
                                }),(0,s.jsx)("span",{
                                  className:"text-base sm:text-lg font-mono font-bold text-white",children:a.secondaryStat
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),(0,s.jsxs)("div",{
                      className:"grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6",children:[
                        (0,s.jsx)("div",{
                          className:"lg:col-span-7",children:(0,s.jsx)("p",{
                            className:"text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6",children:a.description
                          })
                        }),(0,s.jsx)("div",{
                          className:"lg:col-span-5 flex flex-col gap-2.5",children:a.bullets.map((e,t)=>(0,s.jsxs)("div",{
                            className:"flex items-center gap-3 text-xs sm:text-sm text-neutral-300",children:[
                              (0,s.jsx)(R.Z,{
                                size:15,className:"text-white/70 flex-shrink-0"
                              }),(0,s.jsx)("span",{
                                children:e
                              })
                            ]
                          },t))
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      };
      var k=a(3810),M=a(6904),P=a(6867),L=a(3617);
      let F=()=>{
        let e=e=>{
          switch(e){
            case"optics":default:return(0,s.jsx)(M.Z,{
              size:22,className:"text-white"
            });
            case"control":return(0,s.jsx)(P.Z,{
              size:22,className:"text-white"
            });
            case"performance":return(0,s.jsx)(L.Z,{
              size:22,className:"text-white"
            })
          }
        };
        return(0,s.jsxs)("section",{
          id:"art-of-frame",className:"relative w-full min-h-screen bg-[#050505] text-white py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] overflow-hidden",children:[
            (0,s.jsx)("div",{
              className:"absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-white/[0.015] rounded-full filter blur-[100px] pointer-events-none"
            }),(0,s.jsxs)("div",{
              className:"max-w-7xl mx-auto relative z-10",children:[
                (0,s.jsxs)("div",{
                  className:"flex flex-col mb-20",children:[
                    (0,s.jsxs)("div",{
                      className:"flex items-center gap-3 mb-4",children:[
                        (0,s.jsx)("span",{
                          className:"h-[1px] w-8 bg-white/40"
                        }),(0,s.jsx)("span",{
                          className:"text-xs font-mono tracking-cinema text-neutral-400 uppercase",children:"PHILOSOPHY OF DESIGN"
                        })
                      ]
                    }),(0,s.jsx)("h2",{
                      className:"text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-3xl",children:"THE ART OF THE FRAME."
                    }),(0,s.jsx)("div",{
                      className:"w-full h-[1px] bg-gradient-to-r from-white/20 via-white/[0.08] to-transparent mt-8"
                    })
                  ]
                }),(0,s.jsx)("div",{
                  className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:j.map((t,a)=>(0,s.jsxs)(k.E.div,{
                    initial:{
                      opacity:0,y:40
                    },whileInView:{
                      opacity:1,y:0
                    },viewport:{
                      once:!0,margin:"-80px"
                    },transition:{
                      duration:.7,delay:.18*a,ease:[
                        .215,.61,.355,1
                      ]
                    },className:"p-8 sm:p-10 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.07] hover:border-white/20 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between group shadow-[0_20px_40px_rgba(0,0,0,0.6)]",children:[
                      (0,s.jsxs)("div",{
                        children:[
                          (0,s.jsxs)("div",{
                            className:"flex items-center justify-between mb-8",children:[
                              (0,s.jsx)("div",{
                                className:"w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:e(t.id)
                              }),(0,s.jsx)("span",{
                                className:"text-[10px] font-mono tracking-cinema text-neutral-400",children:t.tag
                              })
                            ]
                          }),(0,s.jsx)("h3",{
                            className:"text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2",children:t.title
                          }),(0,s.jsx)("h4",{
                            className:"text-xs font-mono text-neutral-400 tracking-wider mb-5",children:t.tagline
                          }),(0,s.jsx)("p",{
                            className:"text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-8",children:t.description
                          })
                        ]
                      }),(0,s.jsx)("div",{
                        className:"border-t border-white/[0.07] pt-6 flex flex-col gap-3",children:t.stats.map((e,t)=>(0,s.jsxs)("div",{
                          className:"flex items-center justify-between text-xs font-mono",children:[
                            (0,s.jsx)("span",{
                              className:"text-neutral-400 tracking-wider",children:e.label
                            }),(0,s.jsx)("span",{
                              className:"text-white font-medium",children:e.value
                            })
                          ]
                        },t))
                      })
                    ]
                  },t.id))
                })
              ]
            })
          ]
        })
      };
      var D=a(155);
      let _=e=>{
        let{
          onOpenInquiry:t
        }=e;
        return(0,s.jsxs)("section",{
          id:"cta",className:"relative w-full bg-[#050505] text-white py-36 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center border-t border-white/[0.06] overflow-hidden",children:[
            (0,s.jsx)("div",{
              className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[400px] bg-white/[0.025] rounded-full filter blur-[100px] pointer-events-none"
            }),(0,s.jsxs)("div",{
              className:"relative z-10 max-w-4xl mx-auto flex flex-col items-center",children:[
                (0,s.jsxs)("div",{
                  className:"flex items-center gap-2 mb-6",children:[
                    (0,s.jsx)("span",{
                      className:"w-1.5 h-1.5 rounded-full bg-cinema-rec"
                    }),(0,s.jsx)("span",{
                      className:"text-[11px] font-mono tracking-cinema text-neutral-400 uppercase",children:"THE APEX OF MOTION PICTURE CAPTURE"
                    })
                  ]
                }),(0,s.jsx)("h2",{
                  className:"text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]",children:"READY TO SHOOT?"
                }),(0,s.jsxs)("button",{
                  onClick:t,className:"group relative px-9 py-4 rounded-full bg-white text-black font-mono font-bold text-xs sm:text-sm tracking-cinema uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 flex items-center gap-3",children:[
                    (0,s.jsx)("span",{
                      children:"EXPLORE THE CAMERA"
                    }),(0,s.jsx)(o.Z,{
                      size:16,className:"group-hover:translate-x-1 transition-transform"
                    })
                  ]
                }),(0,s.jsx)("p",{
                  className:"text-xs font-mono text-neutral-400 tracking-wider mt-12 max-w-md",children:"Worldwide production shipping begins Q3. Available exclusively through authorized cinema distributors."
                }),(0,s.jsxs)("div",{
                  className:"w-full max-w-5xl mt-28 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400",children:[
                    (0,s.jsxs)("div",{
                      className:"flex items-center gap-3",children:[
                        (0,s.jsx)("span",{
                          className:"text-white/80 font-bold tracking-widest",children:"KRONOS CINEMA"
                        }),(0,s.jsxs)("span",{
                          children:[
                            "\xa9 ",new Date().getFullYear()
                          ]
                        })
                      ]
                    }),(0,s.jsxs)("div",{
                      className:"flex items-center gap-6 text-neutral-400",children:[
                        (0,s.jsx)("span",{
                          children:"8K DCI"
                        }),(0,s.jsx)("span",{
                          children:"•"
                        }),(0,s.jsx)("span",{
                          children:"16-BIT RAW"
                        }),(0,s.jsx)("span",{
                          children:"•"
                        }),(0,s.jsx)("span",{
                          children:"16.5 STOPS"
                        })
                      ]
                    }),(0,s.jsxs)("button",{
                      onClick:()=>{
                        window.scrollTo({
                          top:0,behavior:"smooth"
                        })
                      },className:"flex items-center gap-1.5 text-white/60 hover:text-white transition-colors",children:[
                        (0,s.jsx)("span",{
                          children:"BACK TO TOP"
                        }),(0,s.jsx)(D.Z,{
                          size:12
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      },U=e=>{
        let{
          preloaderState:t,onReady:a
        }=e,[
          n,r
        ]=(0,i.useState)(!1),[
          l,o
        ]=(0,i.useState)("INITIALIZING OPTICAL SYSTEM");
        return((0,i.useEffect)(()=>{
          t.progress<30?o("INITIALIZING OPTICAL SYSTEM"):t.progress<70?o("CALIBRATING 8K SENSOR CORE"):t.progress<100?o("MOUNTING DUAL FPGA PIPELINE"):o("OPTICAL SYSTEM ARMED")
        },[
          t.progress
        ]),(0,i.useEffect)(()=>{
          if(t.isFirstFrameReady&&t.progress>=15){
            let e=setTimeout(()=>{
              r(!0),a()
            },700);
            return()=>clearTimeout(e)
          }
        },[
          t.isFirstFrameReady,t.progress,a
        ]),n)?null:(0,s.jsx)("div",{
          className:"fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-700 select-none ".concat(n?"opacity-0 pointer-events-none":"opacity-100"),children:(0,s.jsxs)("div",{
            className:"max-w-md w-full px-8 flex flex-col items-center",children:[
              (0,s.jsxs)("div",{
                className:"flex items-center gap-3 mb-8",children:[
                  (0,s.jsx)("div",{
                    className:"w-4 h-4 border border-white/40 flex items-center justify-center",children:(0,s.jsx)("div",{
                      className:"w-1.5 h-1.5 bg-white"
                    })
                  }),(0,s.jsx)("span",{
                    className:"text-xs font-mono tracking-cinema text-white uppercase font-bold",children:"KRONOS CINEMA SYSTEM"
                  })
                ]
              }),(0,s.jsx)("div",{
                className:"w-full h-[2px] bg-white/[0.08] relative overflow-hidden mb-5",children:(0,s.jsx)("div",{
                  className:"h-full bg-gradient-to-r from-white/40 via-white to-white/90 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(255,255,255,0.8)]",style:{
                    width:"".concat(Math.max(8,t.progress),"%")
                  }
                })
              }),(0,s.jsxs)("div",{
                className:"w-full flex items-center justify-between font-mono text-[11px] text-white/50 tracking-wider",children:[
                  (0,s.jsx)("span",{
                    className:"animate-pulse",children:l
                  }),(0,s.jsxs)("span",{
                    className:"text-white font-semibold",children:[
                      t.progress,"%"
                    ]
                  })
                ]
              }),(0,s.jsxs)("div",{
                className:"mt-8 text-[9px] font-mono text-white/30 tracking-widest",children:[
                  "BUFFERED: ",t.loadedCount," / ",t.totalCount," FRAMES"
                ]
              })
            ]
          })
        })
      };
      var z=a(9559);
      let G=e=>{
        let{
          isOpen:t,onClose:a,initialTab:n="specs"
        }=e,[
          r,l
        ]=(0,i.useState)(n),[
          o,d
        ]=(0,i.useState)(!1),[
          x,m
        ]=(0,i.useState)("PL"),[
          h,u
        ]=(0,i.useState)("8K RAW");
        return t?(0,s.jsxs)("div",{
          className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none animate-in fade-in duration-200",children:[
            (0,s.jsx)("div",{
              className:"absolute inset-0 bg-black/85 backdrop-blur-xl",onClick:a
            }),(0,s.jsxs)("div",{
              className:"relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10",children:[
                (0,s.jsxs)("div",{
                  className:"px-6 py-5 border-b border-white/10 flex items-center justify-between bg-black/40",children:[
                    (0,s.jsxs)("div",{
                      className:"flex items-center gap-6",children:[
                        (0,s.jsxs)("div",{
                          className:"flex items-center gap-2",children:[
                            (0,s.jsx)("span",{
                              className:"w-2 h-2 rounded-full bg-cinema-rec"
                            }),(0,s.jsx)("h3",{
                              className:"text-sm font-mono tracking-cinema text-white uppercase font-bold",children:"KRONOS 8K CINE // TECHNICAL PORTAL"
                            })
                          ]
                        }),(0,s.jsxs)("div",{
                          className:"hidden sm:flex items-center gap-2 bg-white/[0.05] p-1 rounded-lg border border-white/10",children:[
                            (0,s.jsx)("button",{
                              onClick:()=>l("specs"),className:"px-3 py-1 text-xs font-mono rounded transition-colors ".concat("specs"===r?"bg-white text-black font-semibold":"text-white/60 hover:text-white"),children:"FULL SPECIFICATIONS"
                            }),(0,s.jsx)("button",{
                              onClick:()=>l("inquiry"),className:"px-3 py-1 text-xs font-mono rounded transition-colors ".concat("inquiry"===r?"bg-white text-black font-semibold":"text-white/60 hover:text-white"),children:"ACQUISITION & DEMO"
                            })
                          ]
                        })
                      ]
                    }),(0,s.jsx)("button",{
                      onClick:a,className:"p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors",children:(0,s.jsx)(c.Z,{
                        size:18
                      })
                    })
                  ]
                }),(0,s.jsx)("div",{
                  className:"flex-1 overflow-y-auto p-6 sm:p-8",children:"specs"===r?(0,s.jsx)("div",{
                    className:"flex flex-col gap-10",children:v.map((e,t)=>(0,s.jsxs)("div",{
                      className:"flex flex-col",children:[
                        (0,s.jsxs)("h4",{
                          className:"text-xs font-mono tracking-cinema text-white/50 uppercase pb-2 mb-4 border-b border-white/10 flex items-center gap-2",children:[
                            (0,s.jsx)("span",{
                              className:"w-1.5 h-1.5 bg-white/40 rounded-full"
                            }),e.category
                          ]
                        }),(0,s.jsx)("div",{
                          className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.specs.map((e,t)=>(0,s.jsxs)("div",{
                            className:"p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between",children:[
                              (0,s.jsx)("span",{
                                className:"text-[11px] font-mono text-neutral-400",children:e.name
                              }),(0,s.jsx)("span",{
                                className:"text-xs sm:text-sm font-mono font-medium text-white mt-1",children:e.value
                              })
                            ]
                          },t))
                        })
                      ]
                    },t))
                  }):(0,s.jsx)("div",{
                    className:"max-w-xl mx-auto py-4",children:o?(0,s.jsxs)("div",{
                      className:"text-center py-12 flex flex-col items-center",children:[
                        (0,s.jsx)("div",{
                          className:"w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-white",children:(0,s.jsx)(z.Z,{
                            size:28
                          })
                        }),(0,s.jsx)("h4",{
                          className:"text-xl font-bold text-white mb-2",children:"INQUIRY TRANSMITTED"
                        }),(0,s.jsx)("p",{
                          className:"text-xs text-neutral-400 font-mono",children:"A cinematic technical specialist will contact your production team within 24 hours."
                        })
                      ]
                    }):(0,s.jsxs)("form",{
                      onSubmit:e=>{
                        e.preventDefault(),d(!0),setTimeout(()=>{
                          d(!1),a()
                        },2500)
                      },className:"flex flex-col gap-6",children:[
                        (0,s.jsxs)("div",{
                          children:[
                            (0,s.jsx)("h4",{
                              className:"text-xl font-bold text-white mb-1",children:"REQUEST CINEMA DEMO KIT"
                            }),(0,s.jsx)("p",{
                              className:"text-xs text-neutral-400",children:"Configure your camera package for evaluation and on-set production testing."
                            })
                          ]
                        }),(0,s.jsxs)("div",{
                          className:"flex flex-col gap-2",children:[
                            (0,s.jsx)("label",{
                              className:"text-xs font-mono text-neutral-400 uppercase tracking-wider",children:"SELECT NATIVE MOUNT:"
                            }),(0,s.jsx)("div",{
                              className:"grid grid-cols-3 gap-3",children:[
                                "PL Mount","L-Mount","EF Mount"
                              ].map(e=>(0,s.jsx)("button",{
                                type:"button",onClick:()=>m(e),className:"py-2.5 px-3 rounded text-xs font-mono border transition-all ".concat(x===e?"bg-white text-black font-bold border-white":"bg-white/[0.04] text-white/70 border-white/10 hover:border-white/30"),children:e
                              },e))
                            })
                          ]
                        }),(0,s.jsxs)("div",{
                          className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[
                            (0,s.jsxs)("div",{
                              className:"flex flex-col gap-1.5",children:[
                                (0,s.jsx)("label",{
                                  className:"text-[10px] font-mono text-neutral-400 uppercase",children:"Cinematographer / Name"
                                }),(0,s.jsx)("input",{
                                  required:!0,type:"text",placeholder:"Roger Deakins",className:"px-3.5 py-2.5 rounded bg-white/[0.05] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-white"
                                })
                              ]
                            }),(0,s.jsxs)("div",{
                              className:"flex flex-col gap-1.5",children:[
                                (0,s.jsx)("label",{
                                  className:"text-[10px] font-mono text-neutral-400 uppercase",children:"Production Email"
                                }),(0,s.jsx)("input",{
                                  required:!0,type:"email",placeholder:"dp@production.studio",className:"px-3.5 py-2.5 rounded bg-white/[0.05] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-white"
                                })
                              ]
                            })
                          ]
                        }),(0,s.jsxs)("div",{
                          className:"flex flex-col gap-1.5",children:[
                            (0,s.jsx)("label",{
                              className:"text-[10px] font-mono text-neutral-400 uppercase",children:"Production / Company Name"
                            }),(0,s.jsx)("input",{
                              required:!0,type:"text",placeholder:"Warner Bros. / A24 / Independent",className:"px-3.5 py-2.5 rounded bg-white/[0.05] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-white"
                            })
                          ]
                        }),(0,s.jsx)("button",{
                          type:"submit",className:"mt-4 w-full py-3.5 rounded-full bg-white text-black font-mono font-bold text-xs tracking-cinema uppercase hover:bg-neutral-200 transition-colors shadow-[0_0_24px_rgba(255,255,255,0.2)]",children:"REQUEST EVALUATION UNIT"
                        })
                      ]
                    })
                  })
                }),(0,s.jsxs)("div",{
                  className:"px-6 py-4 border-t border-white/10 flex items-center justify-between bg-black/40 text-[10px] font-mono text-white/40",children:[
                    (0,s.jsx)("span",{
                      children:"KRONOS CINEMA LABS // MUNICH & TOKYO"
                    }),(0,s.jsx)("span",{
                      children:"FIRMWARE V4.2.0"
                    })
                  ]
                })
              ]
            })
          ]
        }):null
      };
      var H=a(9096);
      let K=e=>{
        let{
          children:t
        }=e;
        return(0,i.useEffect)(()=>{
          u.ZP.registerPlugin(p.i);
          let e=new H.Z({
            duration:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),orientation:"vertical",smoothWheel:!0,wheelMultiplier:.9,touchMultiplier:1.2
          });
          e.on("scroll",p.i.update);
          let t=t=>{
            e.raf(1e3*t)
          };
          return u.ZP.ticker.add(t),u.ZP.ticker.lagSmoothing(0),()=>{
            e.destroy(),u.ZP.ticker.remove(t)
          }
        },[
          
        ]),(0,s.jsx)(s.Fragment,{
          children:t
        })
      };
      function B(){
        let e=function(){
          let e=arguments.length>0&&void 0!==arguments[
            0
          ]?arguments[
            0
          ]:120,[
            t,a
          ]=(0,i.useState)(0),[
            s,n
          ]=(0,i.useState)(!1),[
            r,l
          ]=(0,i.useState)(!1),o=(0,i.useRef)([
            
          ]);
          (0,i.useEffect)(()=>{
            let t=!0,s=Array(e);
            o.current=s;
            let i=new Image;
            return i.src="/images/camera/1.webp",i.onload=()=>{
              let r,o;
              t&&(s[
                0
              ]=i,n(!0),a(e=>e+1),r=1,o=2,function i(){
                if(!t||o>e)return;
                let n=Math.min(o+6,e+1),c=[
                  
                ];
                for(let i=o;
                i<n;
                i++){
                  let n=i-1,o=new Promise(o=>{
                    let c=new Image;
                    c.src="/images/camera/".concat(i,".webp"),c.onload=()=>{
                      t&&(s[
                        n
                      ]=c,a(++r),r>=e&&l(!0)),o()
                    },c.onerror=()=>{
                      t&&a(++r),o()
                    }
                  });
                  c.push(o)
                }o=n,Promise.all(c).then(()=>{
                  o<=e&&t&&setTimeout(i,8)
                })
              }())
            },i.onerror=()=>{
              console.error("Failed to load first frame /images/camera/1.webp")
            },()=>{
              t=!1
            }
          },[
            e
          ]);
          let c=e>0?Math.min(100,Math.round(t/e*100)):0;
          return{
            loadedCount:t,totalCount:e,progress:c,isFirstFrameReady:s,isComplete:r,images:o.current
          }
        }(120),[
          t,a
        ]=(0,i.useState)(!1),[
          n,r
        ]=(0,i.useState)(!1),[
          l,o
        ]=(0,i.useState)("specs"),c=()=>{
          o("inquiry"),r(!0)
        };
        return(0,s.jsx)(K,{
          children:(0,s.jsxs)("main",{
            className:"relative bg-[#050505] text-[#f5f5f7] min-h-screen selection:bg-white/20 selection:text-white",children:[
              (0,s.jsx)(U,{
                preloaderState:e,onReady:()=>a(!0)
              }),(0,s.jsx)(h,{
                onOpenSpecs:()=>{
                  o("specs"),r(!0)
                },onOpenInquiry:c
              }),(0,s.jsx)(C,{
                preloaderState:e
              }),(0,s.jsx)(T,{
                
              }),(0,s.jsx)(F,{
                
              }),(0,s.jsx)(_,{
                onOpenInquiry:c
              }),(0,s.jsx)(G,{
                isOpen:n,onClose:()=>r(!1),initialTab:l
              })
            ]
          })
        })
      }
    }
  },function(e){
    e.O(0,[
      922,204,971,117,744
    ],function(){
      return e(e.s=9127)
    }),_N_E=e.O()
  }
]);
