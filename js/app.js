$(document).foundation();
var deltagreen = {
    data : {
        statdescriptors: {
            'str' : ['Feeble','Weak','Muscular','Huge'],
            'dex' : ['Barely Mobile','Clumsy','Nimble','Acrobatic'],
            'con' : ['Bedridden','Sickly','Iron Constitution','Indefatigable'],
            'inte' : ['Imbecilic','Slow witted','Perceptive','Brilliant'],
            'pow' : ['Spineless','Nervous','Strong-willed','Indomitable'],
            'cha' : ['Unbearable','Awkward','Charming','Magnetic']
        },
		professions : {
			'anthropologist' : {
				mainstat: ['inte'],
				skills: {
					'anthropology' : 50,
					'bureaucracy' : 40,
					'history' : 60,
					'occult' : 40,
					'persuade' : 40,
					'language' : 50,
					'language2' : 40
				},
				pick: {
					picks: 2,
					skills: {
						'archeology' : 40,
						'HUMINT' : 50,
						'navigate' : 50,
						'ride' : 50,
						'search' : 60,
						'survival' : 50
					}
				},
				bonds: 4
			},
			'historian' :{
				mainstat: ['inte'],
				skills: {
					'archeology' : 50,
					'bureaucracy' : 40,
					'history' : 60,
					'occult' : 40,
					'persuade' : 40,
					'language' : 50,
					'language2' : 40
				},
				pick: {
					picks: 2,
					skills: {
						'anthropology' : 40,
						'HUMINT' : 50,
						'navigate' : 50,
						'ride' : 50,
						'search' : 60,
						'survival' : 50
					}
				},
				bonds: 4
			},
			'computer scientist' :{
				mainstat: ['inte'],
				skills: {
					'computer science' : 60,
					'craft-electronics' : 30,
					'craft-mechanic' : 30,
					'craft-microelectronics' : 40,
					'science-mathematics' : 40,
					'SIGINT' : 40
				},
				pick: {
					picks: 4,
					skills: {
						'accounting' : 50,
						'bureaucracy' : 50,
						'craft-choose' : 40,
						'language' : 40,
						'heavy machinery' : 50,
						'law' : 40,
						'science-choose' : 40
					}
				},
				bonds: 3
			},
			'engineer' :{
                mainstat: ['inte'],
                skills: {
                    'computer science' : 60,
                    'craft-electronics' : 30,
                    'craft-mechanic' : 30,
                    'craft-microelectronics' : 40,
                    'science-mathematics' : 40,
                    'SIGINT' : 40
                },
                pick: {
                    picks: 4,
                    skills: {
                        'accounting' : 50,
                        'bureaucracy' : 50,
                        'craft-choose' : 40,
                        'language' : 40,
                        'heavy machinery' : 50,
                        'law' : 40,
                        'science-choose' : 40
                    }
                },
                bonds: 3
            },
			'federal agent' :{
				mainstat: ['con','pow','cha'],
				skills: {
					'alertness' : 50,
					'bureaucracy' : 40,
					'criminology' : 50,
					'drive' : 50,
					'firearms' : 50,
					'forensics' : 30,
					'HUMINT' : 60,
					'law' : 30,
					'persuade' : 50,
					'search' : 50,
					'unarmed combat' : 60
				},
				pick: {
					picks: 1,
					skills: {
						'accounting' : 60,
						'computer science' : 50,
						'language' : 50,
						'heavy weapons' : 50,
						'pharmacy' : 50
					}
				},
				bonds: 3
			},
			'physician' :{
				mainstat: ['inte','pow','dex'],
				skills: {
					'bureaucracy' : 50,
					'first aid' : 60,
					'medicine' : 60,
					'persuade' : 40,
					'pharmacy' : 50,
					'science-biology' : 60,
					'search' : 40
				},
				pick: {
					picks: 2,
					skills: {
						'forensics' : 50,
						'psychotherapy' : 60,
						'science-choose' : 50,
						'surgery' : 50
					}
				},
				bonds: 3
			},
			'scientist' :{
				mainstat: ['inte'],
				skills: {
					'bureaucracy' : 40,
					'computer science' : 40,
					'science-choose' : 60,
					'science-choose' : 50,
					'science-choose' : 50
				},
				pick: {
					picks: 3,
					skills: {
						'accounting' : 50,
						'craft-choose' : 40,
						'language' : 40,
						'forensics' : 40,
						'law' : 40,
						'pharmacy' : 40
					}
				},
				bonds: 4
			},
			'special operator' :{
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 60,
					'athletics' : 60,
					'demolitions' : 40,
					'firearms' : 60,
					'heavy weapons' : 50,
					'melee weapons' : 50,
					'military science-land' : 60,
					'navigate' : 50,
					'stealth' : 50,
					'survival' : 50,
					'swim' : 50,
					'unarmed combat': 60
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 2
			},
			'criminal' :{
				mainstat: ['str','dex'],
				skills: {
					'alertness' : 50,
					'criminology' : 60,
					'dodge' : 40,
					'drive' : 50,
					'firearms' : 40,
					'law' : 40,
					'melee weapons' : 40,
					'persuade' : 50,
					'stealth' : 50,
					'unarmed combat' : 50
				},
				pick: {
					picks: 2,
					skills: {
						'craft-locksmithing' : 40,
						'demolitions' : 40,
						'disguise' : 50,
						'language' : 40,
						'forensics' : 40,
						'HUMINT' : 50,
						'navigate' : 50,
						'occult' : 50,
						'pharmacy' : 40
					}
				},
				bonds: 4
			},
			'firefighter' :{
				mainstat: ['str','dex','con'],
				skills: {
					'alertness' : 50,
					'athletics' : 60,
					'craft-electronics' : 40,
					'craft-mechanic' : 40,
					'demolitions' : 50,
					'drive' : 50,
					'first aid' : 50,
					'forensics' : 40,
					'heavy machinery' : 50,
					'navigate' : 50,
					'search' : 40
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 3
			},
			'foreign service officer' :{
				mainstat: ['inte','cha'],
				skills: {
					'accounting' : 40,
					'anthropology' : 40,
					'bureaucracy' : 60,
					'language' : 50,
					'language2' : 50,
					'language3' : 40,
					'history' : 40,
					'HUMINT' : 50,
					'law' : 40,
					'persuade' : 50
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 3
			},
			'intelligence analyst' :{
				mainstat: ['inte'],
				skills: {
					'anthropology' : 40,
					'bureaucracy' : 50,
					'computer science' : 40,
					'criminology' : 40,
					'language' : 50,
					'language2' : 50,
					'language3' : 40,
					'history' : 40,
					'HUMINT' : 50,
					'SIGINT' : 40
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 3
			},
			'intelligence case officer' :{
				mainstat: ['inte','pow','cha'],
				skills: {
					'alertness' : 50,
					'bureaucracy' : 40,
					'criminology' : 50,
					'disguise' : 50,
					'drive' : 40,
					'firearms' : 40,
					'language' : 50,
					'language2' : 40,
					'HUMINT' : 60,
					'persuade' : 40,
					'SIGINT' : 40,
					'stealth' : 50,
					'unarmed combat' : 50
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 2
			},
			'lawyer' :{
				mainstat: ['inte','cha'],
				skills: {
					'accounting' : 50,
					'bureaucracy' : 50,
					'HUMINT' : 40,
					'persuade' : 60
				},
				pick: {
					picks: 4,
					skills: {
						'computer science' : 50,
						'criminology' : 60,
						'language' : 50,
						'law' : 50,
						'pharmacy' : 50
					}
				},
				bonds: 4
			},
			'business executive' :{
				mainstat: ['inte','cha'],
				skills: {
					'accounting' : 50,
					'bureaucracy' : 50,
					'HUMINT' : 40,
					'persuade' : 60
				},
				pick: {
					picks: 4,
					skills: {
						'computer science' : 50,
						'criminology' : 60,
						'language' : 50,
						'law' : 50,
						'pharmacy' : 50
					}
				},
				bonds: 4
			},
			'media specialist' :{
				mainstat: ['inte','cha'],
				skills: {
					'art-choose' : 60,
					'history' : 40,
					'HUMINT' : 40,
					'persuade' : 50
				},
				pick: {
					picks: 5,
					skills: {
						'anthropology' : 40,
						'archeology' : 40,
						'art-choose' : 40,
						'bureaucracy' : 50,
						'computer science' : 40,
						'criminology' : 50,
						'language' : 40,
						'law' : 40,
						'military science-choose' : 40,
						'occult' : 50,
						'science-choose' : 40
					}
				},
				bonds: 4
			},
			'nurse' :{
				mainstat: ['inte','pow','cha'],
				skills: {
					'alertness' : 40,
					'bureaucracy' : 50,
					'first aid' : 60,
					'HUMINT' : 40,
					'medicine' : 40,
					'persuade' : 40,
					'pharmacy': 40,
					'science-biology' : 40
				},
				pick: {
					picks: 2,
					skills: {
						'drive' : 60,
						'forensics' : 40,
						'navigate' : 50,
						'psychotherapy' : 50,
						'search' : 60
					}
				},
				bonds: 4
			},
			'paramedic' :{
				mainstat: ['inte','pow','cha'],
				skills: {
					'alertness' : 40,
					'bureaucracy' : 50,
					'first aid' : 60,
					'HUMINT' : 40,
					'medicine' : 40,
					'persuade' : 40,
					'pharmacy': 40,
					'science-biology' : 40
				},
				pick: {
					picks: 2,
					skills: {
						'drive' : 60,
						'forensics' : 40,
						'navigate' : 50,
						'psychotherapy' : 50,
						'search' : 60
					}
				},
				bonds: 4
			},
			'pilot' :{
				mainstat: ['dex','inte'],
				skills: {
					'alertness' : 60,
					'bureaucracy' : 30,
					'craft-electronics' : 40,
					'craft-mechanic' : 40,
					'navigate' : 50,
					'pilot-choose' : 60,
					'science-meteorology': 40,
					'swim' : 40
				},
				pick: {
					picks: 2,
					skills: {
						'language' : 50,
						'pilot-choose' : 50,
						'heavy weapons' : 50,
						'military science-choose' : 50
					}
				},
				bonds: 4
			},
			'sailor' :{
				mainstat: ['dex','inte'],
				skills: {
					'alertness' : 60,
					'bureaucracy' : 30,
					'craft-electronics' : 40,
					'craft-mechanic' : 40,
					'navigate' : 50,
					'pilot-choose' : 60,
					'science-meteorology': 40,
					'swim' : 40
				},
				pick: {
					picks: 2,
					skills: {
						'language' : 50,
						'pilot-choose' : 50,
						'heavy weapons' : 50,
						'military science-choose' : 50
					}
				},
				bonds: 4
			},
			'police officer' :{
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 60,
					'bureaucracy' : 40,
					'criminology' : 40,
					'drive' : 50,
					'firearms' : 40,
					'first aid' : 30,
					'HUMINT' : 50,
					'law' : 30,
					'melee weapons' : 50,
					'navigate' : 40,
					'persuade' : 40,
					'search' : 40,
					'unarmed combat' : 60
				},
				pick: {
					picks: 1,
					skills: {
						'forensics' : 50,
						'heavy machinery' : 60,
						'heavy weapons' : 50,
						'ride' : 60
					}
				},
				bonds: 3
			},
			'program manager' :{
				mainstat: ['inte','cha'],
				skills: {
					'accounting' : 60,
					'bureaucracy' : 60,
					'computer science' : 50,
					'criminology' : 30,
					'language' : 50,
					'history' : 40,
					'law' : 40,
					'persuade' : 50
				},
				pick: {
					picks: 1,
					skills: {
						'anthropology' : 30,
						'art-choose' : 30,
						'craft-choose' : 30,
						'science-choose' : 30
					}
				},
				bonds: 4
			},
			'soldier' :{
				mainstat: ['str','con'],
				skills: {
					'alertness' : 50,
					'athletics' : 50,
					'bureaucracy' : 30,
					'drive' : 40,
					'firearms' : 40,
					'first aid' : 40,
					'military science-land' : 40,
					'navigate' : 40,
					'persuade' : 30,
					'unarmed combat': 50
				},
				pick: {
					picks: 3,
					skills: {
						'artillery' : 40,
						'computer science' : 40,
						'craft-choose' : 40,
						'demolitions' : 40,
						'language' : 40,
						'heavy machinery' : 50,
						'heavy weapons' : 40,
						'search' : 60,
						'SIGINT' : 40,
						'swim' : 60
					}
				},
				bonds: 4
			}
		},
		specialoperator : {
			'hrt' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 60,
					'athletics' : 60,
					'demolitions' : 40,
					'dodge' : 50,
					'firearms' : 60,
					'forensics' : 30,
					'heavy weapons' : 50,
					'melee weapons' :50,
					'military science-land': 60,
					'navigate': 50,
					'stealth' : 50,
					'survival' : 50,
					'swim' : 50,
					'unarmed combat' : 60
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 1
			},
			'fast' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 50,
					'bureaucracy' : 40,
					'criminology' : 50,
					'drive' : 40,
					'firearms' : 50,
					'forensics' : 30,
					'language': 30,
					'heavy weapons' : 30,
					'HUMINT' :40,
					'law': 30,
					'military science-land': 30,
					'persuade' : 40,
					'pharmacy' : 30,
					'search' : 50,
					'survival' : 30,
					'unarmed combat' : 60
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 2
			},
			'srt' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 50,
					'bureaucracy' : 40,
					'criminology' : 50,
					'dodge' : 50,
					'drive' : 50,
					'firearms' : 50,
					'forensics' : 30,
					'heavy weapons' : 50,
					'HUMINT' :60,
					'law': 30,
					'persuade' : 50,
					'search' : 50,
					'stealth' : 40,
					'unarmed combat' : 60
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 2
			},
			'sog' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 50,
					'athletics' : 40,
					'bureaucracy' : 40,
					'criminology' : 50,
					'dodge' : 40,
					'drive' : 50,
					'firearms' : 50,
					'forensics' : 30,
					'heavy weapons' : 50,
					'HUMINT' :60,
					'law': 30,
					'persuade' : 50,
					'search' : 50,
					'stealth' : 40,
					'unarmed combat' : 60
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 2
			},
			'10MD' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 50,
					'athletics' : 60,
					'bureaucracy' : 30,
					'drive' : 40,
					'firearms' : 40,
					'first aid' : 30,
					'military science-land' : 40,
					'navigate' :50,
					'persuade': 30,
					'survival' : 50,
					'unarmed combat' : 50
				},
				pick: {
					picks: 3,
					skills: {
						'computer science' : 40,
						'craft-choose' : 40,
						'demolitions' : 40,
						'language' : 40,
						'heavy machinery' : 50,
						'heavy weapons' : 40,
						'search' : 60,
						'SIGINT' : 40,
						'swim' : 60
					}
				},
				bonds: 3
			},
			'1B1C' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 50,
					'athletics' : 50,
					'bureaucracy' : 30,
					'drive' : 50,
					'firearms' : 40,
					'first aid' : 30,
					'heavy machinery' : 40,
					'heavy weapons' : 40,
					'military science-land' : 40,
					'navigate' :50,
					'stealth': 30,
					'survival' : 50,
					'unarmed combat' : 50
				},
				pick: {
					picks: 1,
					skills: {
						'artilery' : 40,
						'computer science' : 40,
						'craft-choose' : 40,
						'demolitions' : 40,
						'language' : 40,
						'SIGINT' : 40
					}
				},
				bonds: 3
			},
			'eod' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 60,
					'athletics' : 40,
					'bureaucracy' : 30,
					'craft-electronics' : 40,
					'craft-mechanic' : 40,
					'demolitions' : 60,
					'military science-sea' : 50,
					'navigate' :50,
					'pilot-choose': 40,
					'science-meteorology' : 40,
					'search' : 50,
					'swim' : 60
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 2
			},
			'navyhospital' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 50,
					'athletics' : 50,
					'bureaucracy' : 40,
					'firearms' : 40,
					'first aid' : 60,
					'HUMINT' : 40,
					'medicine' : 40,
					'persuade' :50,
					'pharmacy': 40,
					'science-biology' : 40,
					'survival' : 50
				},
				pick: {
					picks: 2,
					skills: {
						'drive':60,
						'forensics':40,
						'navigate':50,
						'psychotherapy':50,
						'search':60
					}
				},
				bonds: 2
			},
			'forecon' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 60,
					'athletics' : 60,
					'demolitions' : 40,
					'dodge' : 50,
					'firearms' : 60,
					'heavy weapons' : 50,
					'melee weapons' : 50,
					'military science-land' : 60,
					'navigate' :60,
					'stealth': 60,
					'survival' : 60,
					'swim' : 50,
					'unarmed combat' : 60
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 1
			},
			'combatcamera' : {
				mainstat: ['str','con','pow'],
				skills: {
					'art-videography' : 50,
					'athletics' : 60,
					'bureaucracy' : 50,
					'computer science' : 30,
					'firearms' : 60,
					'craft-electronics' : 50,
					'firearms' : 40,
					'history' : 40,
					'HUMINT' :50,
					'melee weapons': 40,
					'persuade' : 50,
					'survival' : 40,
					'unarmed combat' : 50
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 3
			},
			'mspf' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 60,
					'athletics' : 60,
					'bureaucracy' : 30,
					'demolitions' : 40,
					'dodge' : 50,
					'drive' : 40,
					'firearms' : 60,
					'first aid' : 30,
					'language' :40,
					'heavy machinery': 50,
					'heavy weapons' : 50,
					'military science-land' : 40,
					'navigate':40,
					'persuade' : 30,
					'swim' : 60,
					'unarmed combat' : 50
				},
				pick: {
					picks: 0,
					skills: {}
				},
				bonds: 2
			},
			'rtt' : {
				mainstat: ['str','con','pow'],
				skills: {
					'alertness' : 60,
					'athletics' : 60,
					'bureaucracy' : 30,
					'drive' : 40,
					'firearms' : 60,
					'first aid' : 30,
					'heavy weapons' : 40,
					'military science-land' : 40,
					'navigate':40,
					'persuade' : 30,
					'survival' : 30,
					'unarmed combat' : 50
				},
				pick: {
					picks: 2,
					skills: {
						'demolitions' : 40,
						'language' : 40,
						'heavy machinery' : 50,
						'search' : 60,
						'SIGINT' : 40,
						'swim' : 60
					}
				},
				bonds: 3
			},
			'afsocom' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'alertness' : 60,
                    'athletics' : 60,
                    'demolitions' : 40,
                    'firearms' : 60,
                    'heavy weapons' : 50,
                    'melee weapons': 50,
                    'military science-land' : 60,
                    'navigate':50,
                    'stealth' : 50,
                    'survival' : 50,
                    'swim' : 50,
                    'unarmed combat' : 60
                },
                pick: {
                    picks: 1,
                    skills: {
                        'first aid' : 60,
                        'SIGINT' : 50
                    }
                },
                bonds: 1
            },
            'greenberets' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'alertness' : 50,
                    'athletics' : 60,
                    'demolitions' : 40,
                    'firearms' : 60,
                    'language' : 20,
                    'heavy weapons' : 50,
                    'HUMINT': 40,
                    'melee weapons': 50,
                    'military science-land' : 60,
                    'navigate':50,
                    'persuade': 40,
                    'stealth' : 50,
                    'survival' : 50,
                    'swim' : 50,
                    'unarmed combat' : 60
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 1
            },
            'rangers' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'alertness' : 60,
                    'athletics' : 60,
                    'demolitions' : 40,
                    'firearms' : 60,
                    'heavy weapons' : 50,
                    'melee weapons': 50,
                    'military science-land' : 60,
                    'navigate':50,
                    'stealth' : 50,
                    'survival' : 50,
                    'swim' : 50,
                    'unarmed combat' : 60
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 2
            },
            'mist' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'alertness' : 50,
                    'athletics' : 50,
                    'bureaucracy':30,
                    'drive':40,
                    'firearms' : 40,
                    'first aid': 30,
                    'language':40,
                    'HUMINT':50,
                    'military science-land' : 40,
                    'navigate':40,
                    'persuade' : 50,
                    'SIGINT' : 40,
                    'unarmed combat' : 50
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 3
            },
            'airborne' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'alertness' : 60,
                    'athletics' : 50,
                    'bureaucracy':30,
                    'craft-electrician':40,
                    'craft-mechanic':40,
                    'firearms' : 40,
                    'heavy weapons': 50,
                    'military science-air':60,
                    'military science-land' : 20,
                    'navigate':60,
                    'pilot-helicopter': 60,
                    'science-meteorology' : 50,
                    'swim' : 50
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 1
            },
            'isa' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'alertness' : 60,
                    'athletics' : 60,
                    'firearms' : 60,
                    'heavy weapons': 50,
                    'HUMINT':50,
                    'melee weapons':50,
                    'military science-land' : 60,
                    'navigate':50,
                    'SIGINT': 50,
                    'stealth' : 50,
                    'survival':50,
                    'swim' : 50,
                    'unarmed combat': 60
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 1
            },
            'raider' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'alertness' : 50,
                    'athletics' : 60,
                    'demolitions':40,
                    'firearms' : 60,
                    'heavy weapons': 50,
                    'melee weapons':50,
                    'military science-land' : 60,
                    'navigate':50,
                    'persuade': 40,
                    'pilot-boat' : 40,
                    'stealth':50,
                    'survival':50,
                    'swim' : 50,
                    'unarmed combat': 60
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 1
            },
            'seal' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'alertness' : 50,
                    'athletics' : 60,
                    'demolitions':40,
                    'firearms' : 60,
                    'heavy weapons': 50,
                    'melee weapons':50,
                    'military science-land' : 60,
                    'navigate':50,
                    'pilot-boat' : 40,
                    'stealth':50,
                    'survival':60,
                    'swim' : 60,
                    'unarmed combat': 60
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 1
            },
            'sadsog' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'alertness' : 60,
                    'athletics' : 50,
                    'demolitions':40,
                    'firearms' : 60,
                    'heavy weapons': 50,
                    'HUMINT':30,
                    'melee weapons':50,
                    'military science-land' : 50,
                    'navigate':50,
                    'persuade' : 40,
                    'stealth':50,
                    'survival':50,
                    'swim' : 40,
                    'unarmed combat': 60
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 1
            },
            'sadpag' : {
                mainstat: ['str','con','pow'],
                skills: {
                    'accounting':40,
                    'anthropology':40,
                    'athletics':40,
                    'bureaucracy':60,
                    'disguise':40,
                    'firearms':40,
                    'language':50,
                    'language':50,
                    'language':40,
                    'history':40,
                    'HUMINT':50,
                    'law':40,
                    'persuade':50,
                    'stealth':50,
                    'unarmed combat':60
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 1
            },
            'oceft' : {
                mainstat: ['inte','pow'],
                skills: {
                    'alertness':50,
                    'bureaucracy':40,
                    'criminology':50,
                    'drive':40,
                    'firearms':40,
                    'forensics':40,
                    'HUMINT':50,
                    'law':30,
                    'persuade':50,
                    'science-biology':40,
                    'science-chemistry':40,
                    'science-environmental':40,
                    'search':60
                },
                pick: {
                    picks: 0,
                    skills: {}
                },
                bonds: 4
            },
            'epa' : {
                mainstat: ['inte','pow'],
                skills: {
                    'alertness':60,
                    'bureaucracy':40,
                    'forensics':40,
                    'law':40,
                    'science-choose':60,
                    'search':60
                },
                pick: {
                    picks: 2,
                    skills: {
                        'science-chemistry':50,
                        'science-environmental':50,
                        'science-botany':50,
                        'science-biology':50
                    }
                },
                bonds: 4
            }

		},
		skillpackages: {
			'artist, actor, or musician':['alertness','craft-choose','disguise','persuade','art-choose','art-choose','art-choose','HUMINT'],
			'athlete': ['alertness','athletics','dodge','first aid','HUMINT','persuade','swim','unarmed combat'],
		},
		subskills: {
			'art' : ['acting','creative writing','dance','insturment','forgery','painting','sculpture','singing'],
			'craft' : ['electrician','mechanic','locksmithing','gunsmith','architect','carpenter','microelectronics','plumber'],
			'military science' : ['land','air','sea'],
			'pilot': ['airplane','drone','helicopter','small boat','ship','space shuttle'],
			'science' : ['astronomy','biology','botany','chemistry','engineering','genetics','geology','mathematics','meteorology','physics','planetology','zoology']
		},
		agencies: {
			'FBI' : {
			    description: 'The Federal Bureau of Investigation is the lead federal law enforcement organization within the United States. It is part of the Department of Justice, but also an independent member of the intelligence community. The FBI investigates serious crimes that cross state lines, espionage, and especially counterterrorism, which accounts for more than half of the its budget. The Bureau employs some of the best-trained and bestequipped officers in the country. Its agents frequently coordinate with other law enforcement bodies, domestically and abroad, and operate in diverse teams.',
    			departments: {
    				'Criminal Investigative Division': {
    					'professions': ['federal agent'],
    					'bonus': ['criminology','forensics','firearms','law'],
    					'description' : 'The CID is responsible for most of the FBI’s investigations and field work.'
    				},
    				'National Security Branch': {
    					'professions': ['federal agent','intelligence analyst','intelligence case officer'],
    					'bonus': ['language','HUMINT','SIGINT','computer science'],
    					'description' : 'The NSB specializes in counterterrorism and counterintelligence.'
    				},
    				'Intelligence and Operations Support Section' : {
    				    'professions' : ['computer scientist','intelligence case officer','physician','scientist'],
    				    'bonus' : ['computer science','HUMINT','psychotherapy','science'],
    				    'description':'IOSS supports the most high-profile, dangerous, and sensitive investigations by providing highly specialized experts. IOSS includes the vaunted Behavioral Analysis Units, the Violent Criminal Apprehension Program (ViCAP), and the Crisis Management Unit which provides support and training for disasters and high-risk public events.'
    				},
                    'Directorate of Intelligence' : {
                        'professions' : ['intelligence analyst','intelligence case officer'],
                        'bonus' : ['criminology','forensics','firearms','law'],
                        'description': 'The FBI branch focused on surveillance, counterespionage, electronics, and linguistics.'
                    },
                    'Hostage Rescue Team or SWAT' : {
                        'professions' : ['special operator'],//['special.swat'],
                        'special' : 'swat',
                        'bonus' : ['criminology','melee weapons','firearms','stealth'],
                        'description': 'HRT and SWAT specialize in kinetic tactical know-how and rapid takedowns in all types of environments. HRT is a unique SWAT force that specializes in anti-terror operations.'
                    }
			}
			},
			'DEA' : {
                description: 'The Drug Enforcement Administration interdicts illegal drugs domestically and abroad. The War on Terror has highlighted the nexus between the illegal drug trade and terrorism, and the DEA increasingly counters the business side of terrorism. The DEA coordinates other agencies that participate in U.S- sponsored drug investigations. It often works closely with the FBI and Immigration and Customs Enforcement (ICE), but the DEA retains the lead on all investigations and direct actions that focus on illegal drugs. The DEA is staffed by experienced, tough-minded law enforcement personnel. DEA special agents are active in every corner of the United States and in more than 60 other countries.',
                departments: {
                    'Operations Division' : {
    			        'professions' : ['federal agent','police officer'],
    			        'bonus' : ['criminology','pharmacy','science-chemistry','search'],
    			        'description' : 'Operations agents are the backbone of DEA operations, conducting investigations and arrests.'
    			    },
    			    'Operational Support Division' : {
    			        'professions' : ['anthropologist','historian','lawyer','program manager','scientist'],
    			        'bonus' : ['accounting','forensics','law','pharmacy'],
    			        'description':'The Support Division is staffed by subject matter experts and provides knowledge support to agents in the field.'
    			    },
    			    'Special Operations Division' : {
    			        'professions': ['computer scientist','intelligence analyst'],
    			        'bonus': ['computer science','criminology','law','SIGINT'],
    			        'description':'A classified and clandestine branch that specializes in electronic surveillance.'
    			    },
                    'Foreign-Deployed Advisory Support Teams' : {
                        'professions': ['special operator'],//['special.fast'],
                        'special' : 'fast',
                        'bonus': ['athletics','firearms','forensics','search'],
                        'description':'The DEA’s FAST Teams operate as paramilitary units in far-flung areas of the world where narcotics are grown and processed. Four are headquartered in Arlington, Virginia. The fifth is permanently stationed  in Afghanistan.'
                    }
                }
			},
			'ICE' : {
                description: 'U.S. Immigration and Customs Enforcement is a sprawling law enforcement agency under the Department of Homeland Security (DHS). ICE is responsible for identifying, investigating, and dismantling vulnerabilities in the nation’s border, economy, transportation, and infrastructure.<br> ICE is the second largest criminal investigative agency in the U.S. government, after the FBI, and the second largest contributor to the nation’s Joint Terrorism Task Forces (JTTFs). It is the largest investigative arm of the Department of Homeland Security.',
                departments: {
    			    'Homeland Security Investigation Opperations' : {
    			        'professions': ['federal agent'],
    			        'bonus': ['bureaucracy','criminology','forensics','HUMINT'],
    			        'description':'The operational arms of Homeland Security Investigations are Domestic Operations Division (HSI/DO) and International Operations Division (HSI/International Operations).'
    			    },
    			    'Office of Intelligence' : {
    			        'professions': ['media specialist','intelligence analyst'],
    			        'bonus': ['bureaucracy','computer science','science-choose','SIGINT'],
    			        'description': 'Provides intelligence and briefing materials for HSI and ERO operations.'
    			    },
    			    'Removal Divison, ERO' : {
    			        'professions': ['federal agent'],
    			        'bonus': ['athletics','HUMINT','persuade','unarmed combat'],
    			        'description': 'ERO/RD agents apprehend and transport illegal aliens.'
    			    },
    			    'Special Response Team' : {
    			        'professions': ['special operator'],//['special.srt'],
                        'special' : 'srt',
    			        'bonus': ['dodge','firearms','criminology','melee weapons'],
    			        'description':'Provides SWAT support for ICE operations. SRT members are all volunteers, most of whom have regular “day jobs” as agents in other ICE divisions.'
    			    }
    			}
			},
			'USMS' : {
                description: 'The Marshals Service enforces federal court orders, tracks and apprehends fugitives, transports federal prisoners, manages and auctions the seized assets of criminals, protects federal court buildings and personnel, manages the witness protection program, and protects the Strategic National Stockpile (the nation’s emergency medicine and medical supplies). Deputy marshals often work on task forces with other federal, state and local law enforcement agencies, and are responsible for the majority of fugitive apprehensions across the country. USMS personnel work outside the U.S. in conjunction with foreign local law enforcement agencies to return wanted fugitives. Despite its small size and limited budget, the USMS conducts a proportionally large number of arrests across the country.',
                departments: {
    			    'Investigative Operations Division' : {
    			        'professions': ['federal agent'],
    			        'bonus': ['criminology','forensics','law','search'],
    			        'description':'Investigative Operations is responsible for most field work involved in tracking and apprehending fugitives.'
    			    },
    			    'Special Operations Group' : {
    			        'professions': ['special operator'],//['special.sog'],
                        'special' : 'sog',
    			        'bonus': ['athletics','dodge','firearms','unarmed combat'],
    			        'description':'The SOG is a highly trained, all-volunteer group of deputy marshals that are on call to provide SWAT support in emergencies.'
    			    }
    			}
			},
			'Army' : {
                description: 'The U.S. Army seizes and holds terrain. It is the largest and oldest of the military branches. It integrates air assets, armored vehicles, infantry, and artillery. It is well-equipped, especially compared to most other militaries, and it excels in the logistics of moving, supplying, and coordinating large numbers of soldiers and support units.',
                departments: {
    			    'US Army Medical Research Institute of Infectious Diseases' : {
    			        'professions': ['scientist'],
    			        'bonus': ['bureaucracy','military science-choose','pharmacy','science-biology'],
    			        'description':'USAMRIID (pronounced “you-sam-rid”) combats the use of biological agents in warfare. The Institute, as it’s called, cooperates closely with the FBI and CDC.'
    			    },
    			    '902nd Military Intelligence Group' : {
    			        'professions' : ['soldier'],
    			        'bonus': ['bureaucracy','HUMINT','language','SIGINT'],
    			        'description':'Analysts of the 902nd advise and support counterintelligence, counterterrorism, and counterespionage operations.'
    			    },
    			    '10th Mountain Division' : {
    			        'professions': ['special operator'],//['special.10MD'],
                        'special' : '10MD',
    			        'bonus': ['athletics','firearms','first aid','heavy weapons'],
    			        'description':'The 10th Mountain is designed to deploy quickly in force to austere environments, especially mountainous and arctic terrain.'
    			    },
    			    '1st Brigade, 1st Cavalry' : {
    			        'professions': ['special operator'],//['special.1B1C'],
                        'special' : '1B1C',
    			        'bonus': ['firearms','heavy machinery','SIGINT','survival'],
    			        'description':'A long-range surveillance and reconnaissance force.'
    			    },
    			    'Army Medical Corps' : {
    			        'professions': ['physician'],
    			        'bonus': ['athletics','first aid','medicine','surgery'],
    			        'description':'The Corps consists of experienced primary care physicians that can be forward deployed or attached to units in the field.'
    			    }
    			}
			},
			'USAF' : {
                description: 'The United States Air Force (USAF) secures air superiority and provides air support to ground forces. It operates the world’s most advanced aircraft, missiles, and communication equipment. It also is responsible for nuclear deterrence, special operations, cyberspace, wireless communications, data management, and missions in space and low-Earth orbit.',
                departments: {
    			    '41st Rescue Squadron' : {
    			        'professions': ['pilot'],
    			        'bonus': ['alertness','first aid','navigation','pilot-helicopter'],
    			        'description':'The 41st specializes in combat rescue of downed aircrew behind enemy lines using advanced (and aggressive) flying techniques. The Squadron also provides pre-launch surveillance and after-mission astronaut recovery for NASA.'
    			    },
    			    '614th Air and Space Operations Center' : {
    			        'professions': ['intelligence analyst'],
    			        'bonus' : ['computer science','craft-microelectronics','persuade','SIGINT'],
    			        'description':'The 614th is part of Air Force Space Command (AFSPC). The 614th provides command and control as well as space asset (satellite) coordination for the Joint Space Operations Center (JSpOC). Members of the 614th work closely with NASA and other branches of the military in Cheyenne Mountain.'
    			    },
    			    '432d Operations Group' : {
    			        'professions' : ['pilot'],
    			        'bonus' : ['alertness','SIGINT','pilot-drone','craft-electronics'],
    			        'description':'The 432d operates remotely piloted aircraft (drones). While the drones operate around the clock and across the globe, the pilots work from Creech Air Force Base in Nevada.'
    			    },
    			    '70th Intelligence, Surveillance and Reconnaissance Wing' : {
    			        'professions' : ['computer scientist','intelligence analyst'],
    			        'bonus' : ['bureaucracy','computer science','science-math','SIGINT'],
    			        'description':'The 70th supports the Air Force and the wider intelligence community with cryptologic and signals intelligence. It is stationed at Fort Meade in Maryland.'
    			    },
    			    '354th Fighter Squadron' : {
    			        'professions' : ['pilot'],
    			        'bonus' : ['alertness','SIGINT','pilot-aircraft','craft-electronics'],
    			        'description':'Specializes in close air support (CAS) using the tough A-10. The 354th is based in Davis-Monthan Air Force Base in Arizona.'
    			    },
    			    '318th Cyberspace Operations Group' : {
    			        'professions' : ['computer scientist','engineer'],
    			        'bonus' : ['bureaucracy','SIGINT','craft-electronics','craft-microelectronics'],
    			        'description':'An operational group of U.S. Cyber Command (USCYBERCOM), the 318th develops new technologies and tactics in information and cyber warfare.'
    			    }
    			}
			},
			'USN' : {
                description: 'The Navy fights on the high seas, on coasts and on rivers. It projects force from international waters, protects international shipping lanes, and responds to regional crises. The U.S. Navy is the largest and most powerful navy in the history of the world, and is a key component to protecting commerce and American interests across the globe. The Navy maintains a large presence throughout the United States, even in cities and regions far from the ocean.<br>The Navy provides the Marine Corps with support services such as medical personnel, transport, and logistics; however, the Marines are their own service component.',
                departments: {
    			    'Naval Criminal Investigative Service': {
    			        'professions': ['federal agent'],
    			        'bonus' : ['criminology','persuade','HUMINT','law'],
    			        'description':'The NCIS performs criminal investigations on behalf of the Navy and Marine Corps. About half its 2,500 employees are civilian special agents, supported by analysts and forensic experts. A few counter-intelligence investigators are Navy reservists.'
    			    },
    			    'Explosive Ordnance Disposal Group One': {
    			        'profession':['special operator'],//['special.eod'],
                        'special' : 'eod',
    			        'bonus':['alertness','athletics','craft-electronics','first aid'],
    			        'description':'EOD techs disarm all types of ordnance, including improvised, chemical, biological, and nuclear weapons. They are expected to forward deploy with any type of unit, including special-operations forces. Navy EOD techs are also elite divers.'
    			    },
    			    'Hospital Corpsman': {
    			        'professions': ['special operator'],//['special.navyhospital'],
                        'special' : 'navyhospital',
    			        'bonus' : ['first aid','medicine','psychotherapy','surgery'],
    			        'description':'The Hospital Corps provides highly trained enlisted medical personnel to Navy facilities and vessels and to the Marine Corps. They are often embedded with Marine units and forward deployed.'
    			    }
    			}
			},
			'USMC' : {
                description: 'The Marines are the U.S. military’s power projection and shock force. They specialize in opening beachheads and serving as advance forces. Unlike the Army, they do not focus on securing territory. The Marine Corps is a component of the Navy, and is designed to work closely with naval forces for transportation, support, operations, and logistics.<br>In peacetime, the Marine Corps is often given non-combat missions such as the evacuation of Americans from unstable countries and providing humanitarian aid and disaster relief.',
                departments: {
    			    'Force Reconnaissance Company' : {
    			        'professions': ['special operator'],//['special.forecon'],
                        'special' : 'forecon',
    			        'bonus':['drive','firearms','SIGINT','survival'],
    			        'description':'Force Recon detachments are light infantry units that perform deep reconnaissance, intelligence gathering, raiding, and forcible boarding/seizure operations.'
    			    },
    			    'Division of Public Affairs Combat Camera' : {
    			        'professions' : ['special operator'],//['special.combatcamera'],
                        'special' : 'combatcamera',
    			        'bonus':['art-videography','athletics','HUMINT','survival'],
    			        'description':'Combat Camera documents Marine experiences for use in public relations, intelligence, and training.'
    			    },
    			    'Maritime Special Purpose Force' : {
    			        'professions' : ['special operator'],//['special.mspf'],
                        'special' : 'mspf',
    			        'bonus' : ['heavy weapons','navigate','stealth'],
    			        'description':'This unit supports larger elements of the Navy, Marines and SOCOM with high-firepower surgical insertion and raiding capabilities. The MSPF is sometimes called upon for hostage rescue.'
    			    },
    			    'Marine Corps Security Force Regiment' : {
    			        'professions': ['special operator'],//['special.rtt'],
                        'special' : 'rtt',
    			        'bonus' : ['alertness','firearms','melee weapons','unarmed combat'],
    			        'description':'The Security Force Regiment provides security at high-value Navy facilities, such as those containing nuclear submarines and nuclear weapons. It houses two rapid response units, the Fleet Antiterrorism Security Team (FAST) and the Recapture Tactics Team (RTT). RTTs operate like SWAT units at particular facilities, while FAST teams deploy around the world to augment the defense of U.S. government installations.'
    			    }
    			}
			},
			'SOCOM': {
                description: 'Special Operations Command (SOCOM, pronounced “Soh Com”) coordinates U.S. special operations around the world. SOCOM was born as a result of the disastrous attempt by special-operations forces (SOF) in 1980 to free American hostages being held by the Iranian government. The takeaway from so many dead service members was the pressing need to better coordinate SOF. The Army, Navy, Air Force, and Marines all have special-operations forces of their own. When different unitsneed to work together, SOCOM takes over.',
                departments: {
    			    'Air Force - 720th Special Tactics Group' : {
    			        'professions': ['special operator'],//['special.afsocom'],
                        'special' : 'afsocom',
    			        'bonus':['athletics','navigate','survival','stealth'],
    			        'description':'The 24th houses a number of Special Tactics Groups like the 720th. The 720th conducts combat search and rescue missions, collects intelligence, and calls in close air support or airstrikes against enemy combatants— all behind enemy lines.'
    			    },
    			    'Army - Green Berets': {
    			        'professions' : ['special operator'],//['special.greenberets'],
                        'special' : 'greenberets',
    			        'bonus': ['firearms','demolitions','persuade','SIGINT'],
    			        'description':'The Army’s Special Forces Groups are light infantry tasked with asymmetrical missions including unconventional warfare, training friendly foreign troops, reconnaissance, direct action, counterterrorism, and search-and-rescue. Operational Detachment Delta, called Delta Force, is designed to operate deep in hostile territory and perform intelligence-gathering, reconnaissance-in-force, direct military action, search and rescue, and seizure of key installations.'
    			    },
    			    'Army - Rangers' : {
    			        'professions' : ['special operator'],//['special.rangers'],
                        'special' : 'rangers',
    			        'bonus' : ['athletics','melee weapons','stealth','unarmed combat'],
    			        'description':'The Rangers specialize in raiding and forcible seizure of critical installations or assets.'
    			    },
    			    'Army - 4th Military Information Support Team' : {
    			        'professions' : ['special operator'],//['special.mist'],
                        'special' : 'mist',
    			        'bonus': ['athletics','language','psychotherapy','SIGINT'],
    			        'description':'MISTs deploy into countries with active groups that have ideologies hostile to the United States and work to undermine those ideologies through psychological operations and material/monetary support of friendly organizations.'
    			    },
    			    'Army - 160th Special Operations Aviation Regiment' : {
    			        'professions':['special operator'],//['special.airborne'],
                        'special' : 'airborne',
    			        'bonus':['alertness','pilot-choose','survival','stealth'],
    			        'description':'The 160th SOAR (A) consists of the Army’s best-qualified aviators and support soldiers. The “Night Stalkers” provide a wide range of helicopter-borne support for SOCOM, including high-risk attacks, insertions, and reconnaissance.'
    			    },
    			    'Army - Intelligence Support Activity' : {
    			        'professions':['special operator'],//['special.isa'],
                        'special' : 'isa',
    			        'bonus':['firearms','navigate','search','stealth'],
    			        'description':'Operating under many code-names, ISA is composed of special operators with extensive specialized training in reconnaissance and intelligence gathering.'
    			    },
    			    'Marines - Raider Regiment' : {
    			        'professions':['special operator'],//['special.raider'],
                        'special' : 'raider',
    			        'bonus':['athletics','heavy weapons','HUMINT','melee weapons'],
    			        'description':'Formerly the Marine Special Operations Regiment (MSOR), the Marine Raiders are an asymmetrical anti-terror unit that has the additional capability to operate on its own in hostile environments. The Raiders have been called upon to conduct hostage rescues, gather intelligence, and train friendly forces.'
    			    },
    			    'Navy - SEALs' : {
    			        'professions' : ['special operator'],//['special.seal'],
                        'special' : 'seal',
    			        'bonus' : ['firearms','melee weapons','stealth','unarmed combat'],
    			        'description':'DEVGRU and SEAL (Sea, Air and Land) teams are exceptionally trained small units that execute lightning-quick operations in all environment. These teams specialize in high-risk anti-terror operations, and hostage extraction, and are often involved in the most sensitive missions. Where the Army’s Special Forces train to work with local forces and populations, the SEALs train strictly for combat.'
    			    }
    			}
			},
			'CIA' : {
                description: 'The CIA is the largest and best-funded civilian intelligence service of the U.S. government. It is tasked with gathering, processing, and analyzing information from around the world—and with covert paramilitary action and counterterrorism, which became its primary focus after 9/11. The CIA is also involved in cyber warfare, both defensive and offensive. The CIA reports to the Director of National Intelligence, and is one of the most influential organizations in the intelligence community. The CIA has no official law enforcement function and is focused on covert action and overseas intelligence gathering, with limited domestic collection.',
                departments: {
    			    'Directorate of Operations Clandestine Service' : {
    			        'professions':['intelligence case officer'],
    			        'bonus': ['bureaucracy','HUMINT','persuade','SIGINT'],
    			        'description':'Case officers of the National Clandestine Service develop human assets to gather useful intelligence and occasionally are called upon to act on that intelligence.'
    			    },
    			    'Special Activities Division Special Operations Group' : {
    			        'professions' : ['special operator'],//['special.sadsog'],
                        'special' : 'sadsog',
    			        'bonus':['alertness','firearms','stealth','survival'],
    			        'description':'The SOG is the CIA’s elite paramilitary unit. SOG is deployed to undermine the plans of the United States’ enemies before they come to fruition. SOG performs demolition, destabilization, and extraction/rendition missions. It acts clandestinely in concert with special operations forces.'
    			    },
    			    'Special Activities Division Political Action Group' : {
    			        'professions' : ['special operator'],//['special.sadpag'],
                        'special' : 'sadpag',
    			        'bonus' : ['bureaucracy','criminology','persuade','SIGINT'],
    			        'description':'The PAG works in foreign countries to “nudge” their key government personnel towards decisions that benefit the United States. The PAG has deep propaganda experience and often uses open media sources to influence decision-makers and popular opinion. The PAG specializes in gathering intelligence to use against anti-U.S. personalities.'
    			    },
    			    'Directorate of Analysis' : {
    			        'professions': ['intelligence analyst'],
    			        'bonus': ['anthropology','HUMINT','SIGINT','history'],
    			        'description':'DA Subject Matter Analysts gather and analyze intelligence and report on their findings. DA reports are read by leaders and policymakers including the President. Some analysts work in embassies overseas to support CIA operations, but most work at CIA headquarters in Langley.'
    			    }
    			}
			},
			'DOS' : {
                description: 'The State Department is the lead U.S. agency on foreign policy and is technically the senior-most federal agency in the executive branch. The State Department is a relatively small agency in terms of equipment and personnel, but it is a key coordinator of other agencies. Foreign Service Officers (FSOs) are typically smart and creative problem solvers. As diplomats, their status opens doors and grants them significant leeway with foreign governments.',
                departments: {
    			    'Western Hemisphere Affairs Regional Bureau' : {
    			        'professions':['foreign service officer'],
    			        'bonus': ['anthropology','bureaucracy','language','history'],
    			        'description':'Regional bureaus like WHA (which covers the Americas) are where many FSOs work when posted to State Department headquarters.'
    			    },
    			    'Bureau of Diplomatic Security' : {
                        'professions':['federal agent'],
                        'bonus': ['bureaucracy','language','HUMINT','persuade'],
                        'description':'Diplomatic Security protects VIPs, investigates fraud, conducts security investigations, and protects American personnel and facilities abroad. Most DSS special agents are jointly Foreign Service Officers and law enforcement officers.'
                    },
    				'Diplomatic Courier Service' : {
    					'professions' : ['foreign service officer'],
    					'bonus' : ['bureaucracy','language','law','persuade'],
    					'description':'Diplomatic couriers transport and secure sensitive information and papers around the world. Per the Geneva Conventions, diplomatic couriers cannot be searched while transporting official material.'
    				},
    				'Bureau of International Crime and Law Enforcement Affairs' : {
    					'professions' : ['program manager'],
    					'bonus' : ['accounting','bureaucracy','criminology','law'],
    					'description':'INL contractors and FSOs help other countries fight transnational criminal and narcotics networks. INL is well-funded.'
    				},
    				'Bureau of Intelligence and Research' : {
    					'professions' : ['foreign service officer','media specialist','intelligence analyst'],
    					'bonus' : ['history','HUMINT','persuade','SIGINT'],
    					'description':'INR is a small intelligence unit. They collect information from DOS cables and synthesize insights from them with conclusions from the rest of the intelligence community. Each INR officer specializes in a region or country.'
    				}
    	        }
			},
			'CDC' : {
                description: 'The Centers for Disease Control and Prevention (CDC) is the leading American public health institute and is at the forefront of preparing for disease outbreaks or health-related disasters. Part of the Department of Health and Human Services, it coordinates with other health organizations, public and private. Its reputation makes it a world leader during health crises.',
                departments: {
    				'Office of Public Health Preparedness and Response' : {
    					'professions' : ['physician','program manager','scientist'],
    					'bonus' : ['accounting','bureaucracy','persuade','science-biology','science-microbiology','science-environmental','science-choose'],
    				    'description':'The CDC’s lead office in disaster preparedness. It provides funding and technical assistance to states and local governments to build and strengthen public health capabilities.'
    				},
    				'Emergency Operations Center' : {
    					'professions' : ['physician','program manager','scientist'],
    					'bonus' : ['accounting','bureaucracy','persuade','science-biology','science-microbiology','science-environmental','science-choose'],
    					'description':'The crisis-response section of the Office of Public Health Preparedess and Response. Its experts can respond to an emergency in hours while formulating a broad strategy.'
    				},
    				'Office of Public Health and Scientific Services' : {
    					'professions' : ['engineer','media specialist','physician','scientist'],
    					'bonus' : ['bureaucracy','forensics','medicine','science-epidemiology','science-choose'],
    					'description':'This office researches, analyzes, and facilitates science standards to reduce the risk posed by diseases worldwide.'
    				},
    				'Public Health Service Commissioned Corps' : {
    					'professions': ['nurse','physician','psychotherapy','surgery'],
    					'bonus':['first aid','pharmacy','psychotherapy','surgery'],
    					'description':'A U.S. uniformed service that employs commissioned officers who hold ranks and wear uniforms similar to the Navy’s. Its experts provide public health services to the Coast Guard and to many poor and tribal areas. Hundreds are assigned to the CDC, including many in rapid deployment forces that can respond to a crisis in as little as 12 hours.'
    				}
    			}
			},
			'EPA': {
                description: 'The U.S. Environmental Protection Agency protects America from the dark side of its industrialized lifestyle. The EPA enforces national pollution standards, requires companies to manage chemical risks, and responds to hazardous chemical releases and oil spills. Most environmental transgressions do not catch the headlines, yet these smaller offenses form the bulk of the EPA’s work. The EPA is well regarded by the majority of Americans, but many business leaders dislike its involvement in their affairs.',
                departments: {
    				'Office of Criminal Enforcement Forensics and Training' : {
    					'professions' : ['special operator'],//['special.oceft'],
                        'special' : 'oceft',
    					'bonus' : ['bureaucracy','criminology','forensics','science-biology','science-chemistry','science-environmental'],
    					'description':'Contains the CID as well as the National Enforcement Investigations Center (NEIC). OCEFT is responsible for criminal law enforcement and environmental forensics.'
    				},
    				'Regional Office Specialist' : {
    					'professions' : ['special operator'],//['special.epa'],
                        'special' : 'epa',
    					'bonus' : ['criminology','forensics','HUMINT','persuade'],
    					'description':'Regional offices send inspectors, emergency response personnel, and remediation engineers to trouble sites.'
    				}
    			}
			},
            'academic': {
                description: 'Learning institutions, such as universities, and publically funded research institutions.',
                departments: {
                    'Academic Sector' : {
                        'professions' : ['anthropologist','historian','computer scientist','engineer','physician','scientist','lawyer','media specialist'],
                        'bonus' : ['bureaucracy','criminology','forensics','science-biology','science-chemistry','science-environmental'],
                        'description': 'Learning institutions, such as universities, and publically funded research institutions.'
                    }
                }
            },
            'private': {
                description: 'The private sector - non-military, non-government, and not a part of higher education or other public services.',
                departments: {
                    'Private Sector' : {
                        'professions' : ['computer scientist','engineer','physician','criminal','firefighter','lawyer','business executive','media specialist','nurse','paramedic','pilot','sailor','police officer','program manager'],
                        'bonus' : ['bureaucracy','criminology','forensics','science-biology','science-chemistry','science-environmental'],
                        'description': 'The private sector - non-military, non-government, and not a part of higher education or other public services.'
                    }
                }
            }
		}
    },
    methods : {
        randomRoll : function(sides, dice, mod) {
            var total = 0,
                roll;
            //$('#log').append('Roll '+die+'d6 + '+mod);
            for (; dice > 0; dice--) {
                roll = Math.floor((Math.random() * sides) + 1);
                //$('#log').append(' = '+ roll);
                total = total + roll;
            }
            total = total + mod;
            //$('#log').append('+ ' + mod + ' = result = '+ total +'');
            return total;
        },
        statRoll : function() {//4d6 sorted so we can throw out the lowest roll
            var total = 0,
                dice = 4,
                rolls = [];
            for (; dice > 0; dice--) {
                var roll = Math.floor((Math.random() * 6) + 1);
                //$('#log').append(' = '+ roll);
                rolls.push(roll);
            }
            rolls.sort();
            return rolls;
        },
        initEvents : function() {
            $('#initStatRoll').on('click', function() {
                $('#statRolls .results').each(function() {
                    var rollArray = deltagreen.methods.statRoll();
                    var rollHtml = '';
                    var index = 0;
                    var total = 0;
                    rollArray.forEach(function(roll, index) {
                        rollHtml = rollHtml + '<span class="dieResult">' + roll;
                        if (index === 0) {
                            rollHtml = rollHtml + '<span class="exout">x</span>';
                            index++;
                        } else {
                            total = total + roll;
                        }
                        rollHtml = rollHtml + '</span>';
                    });
                    rollHtml = rollHtml + ' = <span class="draggable totalBox">' + total + '</span>';
                    $(this).html(rollHtml);
                });
                $('.draggable').draggable({
                    revert: true
                });
                $('.droppable').droppable({
                    drop : function(event, ui) {
                        rollVal = ui.draggable.text();
                        $(this).addClass('completedValue').val(rollVal).attr('disabled','disabled');
                        ui.draggable.hide();
                        if ($('.droppable.completedValue').length === 6) {
                            $('#statSubmitRow').show();
                            $('.rollWrapper').hide();
                        }
                    }
                });
            });
            $('#statReset').on('click',function() {
                $('#statSubmitRow').hide();
                $('.rollWrapper').show();
                $('.draggable').show();
                $('.completedValue').val('').removeClass('completedValue');
            });
            $('#statSubmit').on('click',function() {
                var statArray = ['str','con','dex','inte','pow','cha'];
                var hpVal = Math.round((Number($('#roll-str').val())+Number($('#roll-con').val()))/2);
                var sanVal = Number($('#roll-pow').val())*5;
                var breakVal = sanVal-Number($('#roll-pow').val());
                var activeDepartment = [];

                for (statIndex in statArray) {
                    var stat = statArray[statIndex];
                    var statValue = $('#roll-'+stat).val();
                    var statInput = $('#attr-'+stat);
                    var descriptorArray = deltagreen.data.statdescriptors[stat];
                    var descriptorInput = $('#des-'+stat);

                    statInput.val(statValue);
                    if (statValue < 9 || statValue > 12) {

                        descriptorInput.show();
                        statInput.addClass('exceptionalStat');
                        if (statValue < 9) {
                            statInput.addClass('lowStat');
                            if (statValue <= 4) {
                                descriptorInput.val(descriptorArray[0]);
                            } else {
                                descriptorInput.val(descriptorArray[1]);
                            }
                        } else {
                            statInput.addClass('highStat');
                            if (statValue >= 17) {
                                descriptorInput.val(descriptorArray[3]);
                            } else {
                                descriptorInput.val(descriptorArray[2]);
                            }
                        }
                    }

                }
                $('#attr-hp').text(hpVal);
                $('#attr-wp').text($('#roll-pow').val());
                $('#attr-san').text(sanVal);
                $('#attr-bp').text(breakVal);

            });
            deltagreen.methods.configureProfessions();
        },
        configureProfessions: function() {
            var allagencies = deltagreen.data.agencies;
            var targetSelectTree = $('ul#fedAgency');
            var recommendedProfessions = deltagreen.methods.recomendedProfessions();

            $('#fedAgency li').on('click',function () {
                var agency = $(this).attr('data-value');
                var agencyData = allagencies[agency];
                var agencyLongName = $(this).text();
                var targetDepartmentList = $('#fedDepartment');
                $('.tier3').hide();
                $('.tier2').show();
                targetDepartmentList.empty();
                $('#fedAgency li.selected').removeClass('selected');
                $('.tier2 h3').html(agencyLongName + ' ('+agency+')');
                $('.tier2 p').text(agencyData.description);
                $(this).addClass('selected');
                //console.log(recommendedProfessions);

                $.each(agencyData.departments, function(deptName, deptData){
                    var lineItem = $('<li><a>'+deptName+'</a></li>');
                    targetDepartmentList.append(lineItem);
                    lineItem.on('click',function () {
                        var departmentLongName = $(this).text();
                        $('.tier3').show();
                        $('#fedProfession').empty();
                        $('#fedDepartment li.selected').removeClass('selected');
                        $('.tier3 h3').html(departmentLongName);
                        $('.tier3 p').text(deptData.description +' Entries in bold are recommended based on your stats.');
                        $(this).addClass('selected');
                        $.each(deptData.professions, function(index, profession){
                            var recommendClass='';
                            var specOpsRef =' data-reference="false" ';
                            if ($.inArray(profession, recommendedProfessions) !== -1) {
                                recommendClass=' class="recommended" ';
                            }
                            if (profession === 'special operator') {
                                specOpsRef=' data-reference="'+deptData.special+'" ';
                            }
                            $('#fedProfession').append('<li'+recommendClass+'><a>'+profession+'</a></li>');
							$('#fedProfession li').on('click',function(){
								var specOps = $(this).attr('data-reference');
								
								deltagreen.methods.setProfessionValues($(this).text(), specOps);
								
							});
                        });
                    });

                });
            });
        },
		setProfessionValues: function(profession,specOps) {
			var agencyAcronym = $('#fedAgency .selected').attr('data-value');
			var agencyBranch = $('#fedDepartment .selected').text();
			var professionalData = (!specOps)?deltagreen.data.professions[profession]:deltagreen.data.specialoperator[specOps];

			deltagreen.data['activeProfession']=profession;
			if (agencyAcronym !== 'academic' & agencyAcronym !== 'private') {
				$('#employer').val(agencyBranch + ' ('+agencyAcronym+')');
			}
			$('#profession').val(profession);
			$.each(professionalData.skills, function(skillName, value) {
				$('input[id="skill-'+skillName+'"]').val(value);
			});
		},
        recomendedProfessions: function() {
            var stats = {
                str: ($('#attr-str').val()>=10),
                con: ($('#attr-con').val()>=10),
                dex: ($('#attr-dex').val()>=10),
                inte: ($('#attr-inte').val()>=10),
                pow: ($('#attr-pow').val()>=10),
                cha: ($('#attr-cha').val()>=10)
            };
            var professionArray = [];
            $.each(deltagreen.data.professions,function(job, data){
                var mainstat = data.mainstat;
                var meetsCriteria = true;
                if ($('#fedAgency li.selected').attr('data-value') === 'EPA') {mainstat = ['inte'];}
                $.each(mainstat, function(index, stat){
                    //console.log(stat + ' is '+ stats[stat]);
                    if (stats[stat] === false) {
                        meetsCriteria=false;
                    }
                });
                if (meetsCriteria) {
                    professionArray.push(job);
                }
            });
            return professionArray;
        }
    }
};
deltagreen.methods.initEvents();
