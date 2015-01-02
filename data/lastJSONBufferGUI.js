{
	"templates": {
		"dragPad": {
			"type":5
		},
		"menuBar": {
			"type":4,
			"ss":"headerSS"
		},
		"cont": {
			"type":0
		},
		"fillToggle": {
			"type":1,
			"fillRatioX":1,
			"divisions":1
		},
		"fillSlider": {
			"type":1,
			"fillRatioX":1
		},
		"fillSlider2": {
			"type":7,
			"fillRatioX":1
		},
		"fillCP": {
			"type":6,
			"fillRatioX":1
		},
		"fillLabel": {
			"type":0,
			"label":" ",
			"fillRatioX":1
		},
		"fillButton": {
			"type":2,
			"fillRatioX":1
		},
		"statSlider": {
			"type":1,
			"label":" ",
			"fillRatioX":1,
			"divisions":10
		},
		"tooltip": {
			"type":0,
			"hoverType":1,
			"layer":3,
			"hasBackground":0
		},
		"tooltipValue": {
			"type":0,
			"hoverType":3,
			"layer":3,
			"hasBackground":0
		},
		"popout": {
			"type":0,
			"hoverType":2,
			"layer":1,
			"hasBackground":0
		},
		"toggle": {
			"type":1,
			"divisions":1
		},
		"slider": {
			"type":1
		},
		"button": {
			"type":2
		},
		"radio": {
			"type":3
		},
		"radioFillCenter": {
			"type":3,
			"fillRatioX":1,
			"alignX":1
		}
	},
	
	"sounds": {
		"mouseDown":{"name":"castinet0","vol":0.5},
		"mouseUp":{"name":"castinet0","vol":1.0},
		"mouseOver":{"name":"claves0","vol":0.6},
		"mouseOut":{"name":"","vol":1.0},
		"showGUI":{"name":"woodblock0","vol":1.0},
		"hideGUI":{"name":"woodblock0","vol":1.0}
	},
	
	
	"comment_1":"Max of 256 materials",
	
	"materialDefs": {
		"none":{"class":"none"},
	
		"Copper":{"class":"Ornate"},
		"Silver":{"class":"Ornate"},
		"Gold":{"class":"Ornate"},
		"Platinum":{"class":"Ornate"},
		
		
		"Onyx":{"class":"Gemstone"},
		"Amethyst":{"class":"Gemstone"},
		"Topaz":{"class":"Gemstone"},
		"Sapphire":{"class":"Gemstone"},
		"Emerald":{"class":"Gemstone"},
		"Ruby":{"class":"Gemstone"},
		"Diamond":{"class":"Gemstone"},
		
		"Sandstone":{"class":"Stone"},
		"Marble":{"class":"Stone"},
		"Granite":{"class":"Stone"},
	
		"Bronze":{"class":"Metal"},
		"Iron":{"class":"Metal"},
		"Steel":{"class":"Metal"},
		
		"Oak":{"class":"Wood"},
		"Redwood":{"class":"Wood"},
		"Yew":{"class":"Wood"},
		
		"Cotton":{"class":"Cloth"},
		"Linen":{"class":"Cloth"},
		"Silk":{"class":"Cloth"},
		
		"Leather":{"class":"Hide"},
		"Dragon Scale":{"class":"Hide"},
		"Yew":{"class":"Hide"}
		
	},
	
	"itemDefs": {
		"none":{
			"iconNum":1367,
			"class":"none"
		},
		"Helm":{
			"iconNum":271,
			"class":"Helmet"
		},
		"Pendant":{
			"iconNum":20,
			"class":"Necklace"
		},
		"Cloak":{
			"iconNum":54,
			"class":"Cloak"
		},
		"Plated Mail":{
			"iconNum":126,
			"class":"Armor"
		},
		"Ring":{
			"iconNum":933,
			"class":"Gloves"
		},
		"Long Sword":{
			"iconNum":1158,
			"class":"Primary"
		},
		"Kite Shield":{
			"iconNum":975,
			"class":"Secondary"
		},
		"Boots":{
			"iconNum":130,
			"class":"Boots"
		},
		
		
		
		"Bow":{
			"iconNum":1274,
			"class":"Primary"
		},
		"Sceptre":{
			"iconNum":1197,
			"class":"Primary"
		},
		"Axe":{
			"iconNum":1329,
			"class":"Primary"
		},
		"Spellbook":{
			"iconNum":782,
			"class":"Primary"
		},
		"Hammer":{
			"iconNum":1180,
			"class":"Primary"
		},
		"Spear":{
			"iconNum":1342,
			"class":"Primary"
		},
		
		
		
		
		"Green Potion":{
			"iconNum":555,
			"class":"Consumable"
		},
		"Watermelon":{
			"iconNum":239,
			"class":"Consumable"
		},
		"Banana":{
			"iconNum":237,
			"class":"Consumable"
		},
		"Cheese":{
			"iconNum":256,
			"class":"Consumable"
		},
		"Pie":{
			"iconNum":251,
			"class":"Consumable"
		},
		"Mutton":{
			"iconNum":257,
			"class":"Consumable"
		}
		
	},
	
	"inventoryData":{
		"items":[
			{"eq":1, "quant":"1", "name":"Helm", "mat":"Iron"},
			{"eq":1, "quant":"1", "name":"Pendant", "mat":"Ruby"},
			{"eq":1, "quant":"1", "name":"Cloak", "mat":"Silk"},
			{"eq":1, "quant":"1", "name":"Plated Mail", "mat":"Iron"},
			{"eq":1, "quant":"1", "name":"Ring", "mat":"Ruby"},
			{"eq":1, "quant":"1", "name":"Long Sword", "mat":"Iron"},
			{"eq":1, "quant":"1", "name":"Kite Shield", "mat":"Iron"},
			{"eq":1, "quant":"1", "name":"Boots", "mat":"Leather"},
			
			{"eq":0, "quant":"1", "name":"Bow", "mat":"Yew"},
			{"eq":0, "quant":"1", "name":"Sceptre", "mat":"Iron"},
			{"eq":0, "quant":"1", "name":"Axe", "mat":"Iron"},
			{"eq":0, "quant":"1", "name":"Spellbook", "mat":"Leather"},
			{"eq":0, "quant":"1", "name":"Hammer", "mat":"Iron"},
			{"eq":0, "quant":"1", "name":"Spear", "mat":"Iron"},
			{"eq":0, "quant":"1", "name":"Green Potion", "mat":"none"},
			{"eq":0, "quant":"1", "name":"Watermelon", "mat":"none"},
			{"eq":0, "quant":"1", "name":"Banana", "mat":"none"},
			{"eq":0, "quant":"1", "name":"Cheese", "mat":"none"},
			{"eq":0, "quant":"1", "name":"Pie", "mat":"none"},
			{"eq":0, "quant":"1", "name":"Mutton", "mat":"none"}
		]
	},
	
	
	
	
	
	
	
	
	
	"baseGUI":{
		"template":"cont",
		"hasBackground":0,
		"hoverType":4,
		"floatingChildren":[
			
			
			
			
			
			
			
			
			
			
			{
				"uid":"guiHandles.fieldMenu",
				"template":"cont",
				"hasBackground":0,
				"alignX":1,
				"children":[
					{
						"template":"cont",
						"fillDir":1,
						"children": [
						
							
							{
								"template":"cont",
								"fillDir":1,
								"fillRatioX":1,
								"children":[
									
									{
										"template":"fillLabel",
										"uid":"fieldMenu.field"
									},
									{
										"template":"cont",
										"fillDir":0,
										"fillRatioX":1,
										"children":[
											{
												"ss":"greenSS",
												"template":"fillButton",
												"label":"Ok",
												"uid":"fieldMenu.ok"
												
											},
											{
												"ss":"redSS",
												"template":"fillButton",
												"label":"Cancel",
												"uid":"fieldMenu.cancel"
												
											}
										]
									}
									
									
									
									
								]
							}
						]
					}
				]
			},




			
			
			
			{
				"uid":"guiHandles.pickerMenu",
				"template":"cont",
				"layer":2,
				"hasBackground":0,
				"children":[
					{
						"template":"cont",
						"fillDir":1,
						"children": [
						
							
							{
								"template":"cont",
								"fillDir":1,
								"fillRatioX":1,
								"children":[
									
									
									
									
									{
										"template":"fillSlider",
										"label":" ",
										"uid":"picker.huelit",
										"minDimY":140,
										"flags":5
									},
									{
										"template":"fillSlider",
										"label":" ",
										"uid":"picker.satlit",
										"minDimY":140,
										"flags":6
									},
									
									
									{
										"template":"fillSlider",
										"label":"Hue",
										"uid":"picker.hue",
										"flags":1
									},
									{
										"template":"fillSlider",
										"label":"Saturation",
										"uid":"picker.saturation",
										"flags":2
									},
									{
										"template":"fillSlider",
										"label":"Lightness",
										"uid":"picker.lightness",
										"flags":4
										
									}
									
									
									
								]
							}
						]
					}
				]
			},
			
			
			
			
			{
				"uid":"guiHandles.ddMenu",
				"template":"cont",
				"hasBackground":0,
				"children":[
					{
						"template":"cont",
						"fillDir":1,
						"children": [
						
							
							{
								"template":"cont",
								"fillDir":1,
								"fillRatioX":1,
								"children":[
									
									{
										"template":"radioFillCenter",
										"label":"Place Entity",
										"floatingChildren": [{
											"template":"popout",
											"fillRatioX":1,
											"children": [
												
												{
													"template":"cont",
													"fillDir":1,
													"children": [
													
														{
															"template":"cont",
															"fillDir":1,
															"fillRatioX":1,
															"children":[
																{
																	"template":"fillButton",
																	"label":"Actor",
																	"uid":"placeEntity.actor"
																},
																{
																	"template":"fillButton",
																	"label":"Object",
																	"uid":"placeEntity.object"
																},
																{
																	"template":"fillButton",
																	"label":"Building",
																	"uid":"placeEntity.building"
																}
															]
														}
													]
												}
												
											]
										}]
									},
									{
										"template":"radioFillCenter",
										"label":"Remove Entity"
										
									},
									{
										"template":"radioFillCenter",
										"label":"Edit Entity"
										
									}
									
									
									
								]
							}
						]
					}
				]
			},
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			{
				"uid":"guiHandles.mainMenu",
				"template":"cont",
				"hasBackground":0,
				"children":[
					{
						"template":"cont",
						"fillDir":1,
						"children": [
						
							{
								"template":"menuBar",
								"label":"Main Menu",
								"alignX":1,
								"fillRatioX":1
								
							},
							{
								"template":"cont",
								"fillDir":1,
								"children":[
									
									{
										"template":"radioFillCenter",
										"label":"Inventory",
										"floatingChildren": [{
											"template":"popout",
											"fillRatioX":1,
											"children": [
												{
													"template":"cont",
													"fillDir":1,
													"children": [
													
														{
															"template":"menuBar",
															"label":"Equipped",
															"alignX":1,
															"fillRatioX":1
															
														},
														{
															"template":"cont",
															"fillDir":1,
															"fillRatioX":1,
															"dataSource":"inventoryData.items",
															"whereAllEqual":[
																["eq",1]
															],
															"whereAnyEqual":[
															
															],
															"childType":"E_GCT_INV_ITEM",
															"childTemplate":{
																"fillRatioX":1,
																"template":"radio",
																"label":"",
																"floatingChildren":[
																	{
																		"template":"tooltip",
																		"children":[
																			{
																				"template":"cont",
																				"label":"",
																				"ss":"tooltipSS"
																			}
																		]
																	}
																]
																
															},
															"children": []
														},
														{
															"template":"menuBar",
															"label":"Inventory",
															"alignX":1,
															"fillRatioX":1
															
														},
														{
															"template":"cont",
															"fillDir":1,
															"dataSource":"inventoryData.items",
															"fillRatioX":1,
															"maxDimY":384,
															"whereAllEqual":[
																["eq",0]
															],
															"whereAnyEqual":[
															
															],
															"childType":"E_GCT_INV_ITEM",
															"childTemplate":{
																"fillRatioX":1,
																"template":"radio",
																"label":"",
																"floatingChildren":[
																	{
																		"template":"tooltip",
																		"children":[
																			{
																				"template":"cont",
																				"label":"",
																				"ss":"tooltipSS"
																			}
																		]
																	}
																]
																							
															},
															"children": []
														}
													
													]
												}
											]
										}]
									},
									{
										"template":"radioFillCenter",
										"label":"Character Stats",
										"floatingChildren": [{
											"template":"popout",
											"fillRatioX":1,
											"children": [
												
												{
													"template":"cont",
													"fillDir":1,
													"children": [
													
														{
															"template":"menuBar",
															"label":"Stats",
															"alignX":1,
															"fillRatioX":1
															
														},
														{
															"template":"cont",
															"fillDir":1,
															"fillRatioX":1,
															"children":[
																{
																	"template":"statSlider",
																	"label":"Strength",
																	"uid":"$stats.strength"
																},
																{
																	"template":"statSlider",
																	"label":"Dexterity",
																	"uid":"$stats.dexterity"
																},
																{
																	"template":"statSlider",
																	"label":"Celerity",
																	"uid":"$stats.celerity"
																},
																{
																	"template":"statSlider",
																	"label":"Vitality",
																	"uid":"$stats.vitality"
																},
																{
																	"template":"statSlider",
																	"label":"Intelligence",
																	"uid":"$stats.intelligence"
																},
																{
																	"template":"statSlider",
																	"label":"Charisma",
																	"uid":"$stats.charisma"
																},
																{
																	"template":"statSlider",
																	"label":"Perception",
																	"uid":"$stats.perception"
																},
																{
																	"template":"statSlider",
																	"label":"Discipline",
																	"uid":"$stats.discipline"
																}
															]
														}
													]
												}
												
											]
										}]
										
									},
									{
										"template":"radioFillCenter",
										"label":"Options",
										"floatingChildren": [{
											"template":"popout",
											"fillRatioX":1,
											"children": [
												
												
												{
													"template":"cont",
													"fillDir":1,
													"children": [
														{
															"template":"menuBar",
															"label":"Options",
															"alignX":1,
															"fillRatioX":1
															
														},
														{
															"template":"cont",
															"fillDir":1,
															"children":[
																{
																	"template":"radioFillCenter",
																	"label":"Graphics Options",
																	"floatingChildren": [{
																		"template":"popout",
																		"fillRatioX":1,
																		"children": [
																			
																			{
																				"template":"cont",
																				"fillDir":1,
																				"children": [
																				
																					{
																						"template":"menuBar",
																						"label":"Graphics Options",
																						"alignX":1,
																						"fillRatioX":1
																						
																					},
																					{
																						"template":"cont",
																						"fillDir":1,
																						"children":[
																							{
																								"template":"fillSlider",
																								"label":"Clip Distance",
																								"uid":"$options.graphics.clipDist"
																							}
																						]
																					}
																				]
																			}
																			
																		]
																	}]
																},
																{
																	"template":"radioFillCenter",
																	"label":"Sound Options",
																	"floatingChildren": [{
																		"template":"popout",
																		"fillRatioX":1,
																		"children": [
																			{
																				"template":"cont",
																				"fillDir":1,
																				"children": [
																				
																					{
																						"template":"menuBar",
																						"label":"Sound Options",
																						"alignX":1,
																						"fillRatioX":1
																						
																					},
																					{
																						"template":"cont",
																						"fillDir":1,
																						"children":[
																							{
																								"template":"fillSlider",
																								"label":"Master Volume",
																								"uid":"$options.sound.masterVolume"
																							},
																							{
																								"template":"fillSlider",
																								"label":"Ambient Volume",
																								"uid":"$options.sound.ambientVolume"
																							},
																							{
																								"template":"fillSlider",
																								"label":"GUI Volume",
																								"uid":"$options.sound.guiVolume"
																							},
																							{
																								"template":"fillSlider",
																								"label":"Music Volume",
																								"uid":"$options.sound.musicVolume"
																							},
																							{
																								"template":"fillSlider",
																								"label":"Sound FX Volume",
																								"uid":"$options.sound.fxVolume"
																							}
																						]
																					}
																				]
																			}
																		]
																	}]
																},
																{
																	"template":"radioFillCenter",
																	"label":"Input Options",
																	"floatingChildren": [{
																		"template":"popout",
																		"fillRatioX":1,
																		"children": [
																		
																		]
																	}]
																}
																
															]
														}
													]
												}
												
												
												
												
												
												
												
												
												
												
												
											]
										}]
									},
									
									
									{
										"template":"radioFillCenter",
										"label":"Materials",
										"floatingChildren": [{
											"template":"popout",
											"fillRatioX":1,
											"children": [
												{
													"template":"cont",
													"fillDir":1,
													"children": [
													
														{
															"template":"menuBar",
															"label":"Materials",
															"alignX":1,
															"fillRatioX":1
															
														},
														{
															"template":"cont",
															"fillDir":1,
															"fillRatioX":1,
															"dataFile":"materials.js",
															"dataSource":"materials",
															"childType":"E_GTC_GENERIC",
															"children": [],
															"childTemplate":{
																"template":"radioFillCenter",
																"label":"",
																"floatingChildren":[
																
																
																
																
																
																	{
																		"template":"popout",
																		"fillRatioX":1,
																		"children": [
																			{
																				"template":"cont",
																				"fillDir":1,
																				"children": [
																					{
																						"template":"menuBar",
																						"label":"Material Node",
																						"alignX":1,
																						"fillRatioX":1
																						
																					},
																					{
																						"template":"cont",
																						"fillDir":1,
																						"fillRatioX":1,
																						"dataFile":"materials.js",
																						"dataSource":"",
																						"childType":"E_GTC_GENERIC",
																						"children": [],
																						"childTemplate":{
																							"template":"cont",
																							"fillDir":0,
																							"fillRatioX":1,
																							"dataFile":"materials.js",
																							"dataSource":"",
																							"childType":"E_GTC_GENERIC",
																							"children": [],
																							"childTemplate":
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							{
																								"template":"radioFillCenter",
																								"label":"",
																								"floatingChildren":[{
																										"template":"popout",
																										"fillRatioX":1,
																										"children": [
																											{
																												"template":"cont",
																												"fillDir":1,
																												"children": [
																													{
																														"template":"menuBar",
																														"label":"Material Props",
																														"alignX":1,
																														"fillRatioX":1
																														
																													},
																													{
																														"template":"cont",
																														"fillDir":1,
																														"fillRatioX":1,
																														"dataFile":"materials.js",
																														"dataSource":"",
																														"childType":"E_GTC_GENERIC",
																														"children": [],
																														"childTemplate":{
																															"template":"",
																															"dataFile":"",
																															"dataRef":"",
																															"label":" ",
																															"value":0.0,
																															"value0":0.0,
																															"value1":0.0,
																															"value2":0.0,
																															"value3":0.0
																														}
																														
																													}
																												
																												]
																											}
																										]
																									}]
																							}
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																							
																						}
																						
																					}
																				
																				]
																			}
																		]
																	}
																
																
																
																
																
																
																]
															}
														}
													
													]
												}
											]
										}]
									},
									
									
									
									
									
									
									
									
									
									
									
									
									
									{
										"template":"radioFillCenter",
										"label":"Debug Info",
										"floatingChildren": [{
											"template":"popout",
											"fillRatioX":1,
											"children": [
											
												{
													"template":"cont",
													"fillDir":1,
													
													"children": [
													
														{
															"template":"menuBar",
															"label":"Debug Info",
															"alignX":1,
															"fillRatioX":1
															
														},
														{
															"template":"cont",
															"fillDir":1,
															"fillRatioX":1,
															"children":[
																{
																	"template":"fillLabel",
																	"uid":"debug.fbMem"
																},
																{
																	"template":"fillLabel",
																	"uid":"debug.chunkMem"
																},
																{
																	"template":"fillLabel",
																	"uid":"debug.totMem"
																},
																{
																	"template":"fillLabel",
																	"uid":"debug.chunksGen"
																}
															]
														}
													]
												}								
												
											]
										}]
									},
									{
										"template":"radioFillCenter",
										"label":"Character Editor",
										"floatingChildren": [{
											"template":"popout",
											"fillRatioX":1,
											"children": [
											
												{
													"template":"cont",
													"fillDir":1,
													
													"children": [
													
														{
															"template":"menuBar",
															"label":"Character Editor",
															"alignX":1,
															"fillRatioX":1
															
														},
														{
															"template":"cont",
															"fillDir":1,
															"fillRatioX":1,
															"children":[
																{
																	"template":"fillToggle",
																	"label":"Test Pathfinding",
																	"uid":"$charEdit.pathfindingOn"
																},
																{
																	"template":"fillToggle",
																	"label":"Edit Pose",
																	"uid":"$charEdit.editPose"
																},
																{
																	"template":"fillToggle",
																	"label":"Render Human",
																	"uid":"$charEdit.orgOn"
																},
																{
																	"template":"fillToggle",
																	"label":"Mirror Changes",
																	"uid":"$charEdit.mirrorOn"
																},
																{
																	"template":"fillToggle",
																	"label":"Apply to Children",
																	"uid":"$charEdit.applyToChildren"
																},
																{
																	"template":"fillButton",
																	"label":"Save Pose",
																	"uid":"charEdit.savePose"
																},
																{
																	"template":"fillButton",
																	"label":"Load Pose",
																	"uid":"charEdit.loadPose"
																}
															]
														}
													]
												}								
												
											]
										}]
									},
									{
										"template":"radioFillCenter",
										"label":"Shader Parameters",
										"floatingChildren": [{
											"template":"popout",
											"fillRatioX":1,
											"children": [
											
												{
													"template":"cont",
													"fillDir":1,
													"children": [
													
														{
															"template":"menuBar",
															"label":"Shader Parameters",
															"alignX":1,
															"fillRatioX":1
															
														},
														{
															"template":"cont",
															"maxDimY": 512,
															"fillDir":1,
															"isInternal":1,
															"dataFile":"shaderParams",
															"dataSource":"params",
															"childType":"E_GCT_SHADER_PARAM",
															"children": [],
															"childTemplate":{
																"fillRatioX":1,
																"template":"slider",
																"label":"",
																"uid":"",
																
																"callback":"updateShaderParam",
																"callbackData":{
																	"shaderName":"",
																	"paramName":""
																},
																
																"floatingChildren":[
																	{
																		"template":"tooltipValue",
																		"children":[
																			{
																				"template":"cont",
																				"label":"",
																				"ss":"tooltipSS"
																			}
																		]
																	}
																]
															}
														}
													]
												}
											

											]
										}]
										
									},
									{
										"template":"radioFillCenter",
										"label":"Map",
										"value":1.0,
										"floatingChildren": [{
											"template":"popout",
											"fillRatioX":1,
											"children": [
											
												{
													"template":"cont",
													"fillDir":1,
													"children": [
													
														{
															"template":"menuBar",
															"label":"Map",
															"alignX":1,
															"fillRatioX":1
															
														},
														{
															"template":"dragPad",
															"hasBackground":1,
															"uid":"map.mapHolder",
															"minDimX": 512,
															"minDimY": 512,
															"fillDir":1,
															"children": [
																
															]
														}
													]
												}
											
											
												
												
											]
										}]
										
									}
									
									
									
								]
							}
						]
					}
				]
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		]
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

