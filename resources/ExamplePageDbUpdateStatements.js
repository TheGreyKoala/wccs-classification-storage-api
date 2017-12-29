"use strict";

module.exports ={
    "statements": [
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage1.1" } }
        },
        {
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage1.2" } }
        },
        {
            // CONTENT
            "statement": "MERGE (c:Content {value: $c.value})",
            "parameters": { "c": { "value": "MyProperty1Content" } }
        },
        {
            // PROPERTY
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})",
            "parameters": { "p": { "checksum": "b5b995a982a99fd06cb36938d60b8a96", "type": "MyProperty1Type"} }
        },
        {
            // REFERENCE
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": { "checksum": "b5b995a982a99fd06cb36938d60b8a96" },
                "r": { "destination": "http://myhost/myfolder/myotherpage1.1" },
                "ref": {"type": "MyReference1.1Type", "name": "my_reference_1.1", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[11]/tr[11]/td[11]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[11]/tr[11]/td[111]", "offset": 120 }}}
            }
        },
        {
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": { "checksum": "b5b995a982a99fd06cb36938d60b8a96" },
                "r": { "destination": "http://myhost/myfolder/myotherpage1.2" },
                "ref": {"type": "MyReference1.2Type", "name": "my_reference_1.2", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[12]/tr[12]/td[12]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[12]/tr[12]/td[122]", "offset": 120 }}}
            }
        },
        {
            // READS
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(c:Content {value: $c.value})\n" +
            "MERGE (p)-[:Reads]->(c)",
            "parameters": {
                "p": { "checksum": "b5b995a982a99fd06cb36938d60b8a96" },
                "c": { "value": "MyProperty1Content" }
            }
        },
        {
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage1.2" } }
        },
        {
            "statement": "MERGE (c:Content {value: $c.value})",
            "parameters": { "c": { "value": "MyProperty2.1Content" } }
        },
        {
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})",
            "parameters": { "p": { "checksum": "9bf1f1051f97d46b7086ffc3df6a832a", "type": "MyProperty2.1Type"} }
        },
        {
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": { "checksum": "9bf1f1051f97d46b7086ffc3df6a832a" },
                "r": { "destination": "http://myhost/myfolder/myotherpage1.2" },
                "ref": {"type": "MyReference1.2Type", "name": "my_reference_2.1.1", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[12]/tr[12]/td[12]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[12]/tr[12]/td[122]", "offset": 120 }}}
            }
        },
        {
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(c:Content {value: $c.value})\n" +
            "MERGE (p)-[:Reads]->(c)",
            "parameters": {
                "p": { "checksum": "9bf1f1051f97d46b7086ffc3df6a832a" },
                "c": { "value": "MyProperty2.1Content" }
            }
        },
        {
            "statement": "MERGE (c:Content {value: $c.value})",
            "parameters": { "c": { "value": "MyProperty2.2Content" } }
        },
        {
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})",
            "parameters": { "p": { "checksum": "2528ec83539e14a0220cee92329f8c3f", "type": "MyProperty2.2Type"} }
        },
        {
            // READS
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(c:Content {value: $c.value})\n" +
            "MERGE (p)-[:Reads]->(c)",
            "parameters": {
                "p": { "checksum": "2528ec83539e14a0220cee92329f8c3f" },
                "c": { "value": "MyProperty2.2Content" }
            }
        },
        {
            // CONTENT
            "statement": "MERGE (c:Content {value: $c.value})",
            "parameters": { "c": { "value": "MyProperty3Item1Content" } }
        },
        {
            // PROPERTY
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})",
            "parameters": { "p": { "checksum": "e6e64c8c129f23c3fd01cfa8f931738d", "type": "MyProperty3Type"} }
        },
        {
            // READS
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(c:Content {value: $c.value})\n" +
            "MERGE (p)-[:Reads]->(c)",
            "parameters": {
                "p": { "checksum": "e6e64c8c129f23c3fd01cfa8f931738d" },
                "c": { "value": "MyProperty3Item1Content" }
            }
        },
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage2.1" } }
        },
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage2.2" } }
        },
        {
            // CONTENT
            "statement": "MERGE (c:Content {value: $c.value})",
            "parameters": { "c": { "value": "MyProperty2Content" } }
        },
        {
            // PROPERTY
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})",
            "parameters": { "p": { "checksum": "c48ca97c86120867f45580b1e58b4e05", "type": "MyProperty2Type"} }
        },
        {
            // OWNS
            "statement":
            "MATCH" +
            "(p1:Property {checksum: $p1.checksum})," +
            "(p2:Property {checksum: $p2.checksum})\n" +
            "MERGE (p1)-[o:Owns {" +
            "name: $o.name," +
            "isCollection: $o.isCollection," +
            "selectorType: $o.selector.type," +
            "startSelectorType: $o.selector.startSelector.type," +
            "startSelectorValue: $o.selector.startSelector.value," +
            "startSelectorOffset: $o.selector.startSelector.offset," +
            "endSelectorType: $o.selector.endSelector.type," +
            "endSelectorValue: $o.selector.endSelector.value," +
            "endSelectorOffset: $o.selector.endSelector.offset" +
            "}]->(p2)",
            "parameters": {
                "p1": { "checksum": "c48ca97c86120867f45580b1e58b4e05" },
                "p2": { "checksum": "9bf1f1051f97d46b7086ffc3df6a832a" },
                "o": {"name": "my_property_2.1", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//p[21]/span[2]/span[21]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//p[21]/span[2]/span[211]", "offset": 120 }}}
            }
        },
        {
            // OWNS
            "statement":
            "MATCH" +
            "(p1:Property {checksum: $p1.checksum})," +
            "(p2:Property {checksum: $p2.checksum})\n" +
            "MERGE (p1)-[o:Owns {" +
            "name: $o.name," +
            "isCollection: $o.isCollection," +
            "selectorType: $o.selector.type," +
            "startSelectorType: $o.selector.startSelector.type," +
            "startSelectorValue: $o.selector.startSelector.value," +
            "startSelectorOffset: $o.selector.startSelector.offset," +
            "endSelectorType: $o.selector.endSelector.type," +
            "endSelectorValue: $o.selector.endSelector.value," +
            "endSelectorOffset: $o.selector.endSelector.offset" +
            "}]->(p2)",
            "parameters": {
                "p1": { "checksum": "c48ca97c86120867f45580b1e58b4e05" },
                "p2": { "checksum": "2528ec83539e14a0220cee92329f8c3f" },
                "o": {"name": "my_property_2.2", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//p[22]/span[2]/span[22]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//p[22]/span[22]/span[222]", "offset": 120 }}}
            }
        },
        {
            // OWNS
            "statement":
            "MATCH" +
            "(p1:Property {checksum: $p1.checksum})," +
            "(p2:Property {checksum: $p2.checksum})\n" +
            "MERGE (p1)-[o:Owns {" +
            "name: $o.name," +
            "isCollection: $o.isCollection," +
            "selectorType: $o.selector.type," +
            "startSelectorType: $o.selector.startSelector.type," +
            "startSelectorValue: $o.selector.startSelector.value," +
            "startSelectorOffset: $o.selector.startSelector.offset," +
            "endSelectorType: $o.selector.endSelector.type," +
            "endSelectorValue: $o.selector.endSelector.value," +
            "endSelectorOffset: $o.selector.endSelector.offset" +
            "}]->(p2)",
            "parameters": {
                "p1": { "checksum": "c48ca97c86120867f45580b1e58b4e05" },
                "p2": { "checksum": "e6e64c8c129f23c3fd01cfa8f931738d" },
                "o": {"name": "my_property_2.3", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//p[31]/span[31]/span[31]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//p[31]/span[31]/span[311]", "offset": 120 }}}
            }
        },
        {
            // REFERENCE
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": { "checksum": "c48ca97c86120867f45580b1e58b4e05" },
                "r": { "destination": "http://myhost/myfolder/myotherpage2.1" },
                "ref": {"type": "MyReference2.1Type", "name": "my_reference_2.1", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[21]/tr[21]/td[21]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[21]/tr[21]/td[211]", "offset": 120 }}}
            }
        },
        {
            // REFERENCE
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": { "checksum": "c48ca97c86120867f45580b1e58b4e05" },
                "r": { "destination": "http://myhost/myfolder/myotherpage2.2" },
                "ref": {"type": "MyReference2.2Type", "name": "my_reference_2.2", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[22]/tr[22]/td[22]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[22]/tr[22]/td[222]", "offset": 120 }}}
            }
        },
        {
            // READS
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(c:Content {value: $c.value})\n" +
            "MERGE (p)-[:Reads]->(c)",
            "parameters": {
                "p": { "checksum": "c48ca97c86120867f45580b1e58b4e05" },
                "c": { "value": "MyProperty2Content" }
            }
        },
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage3#1.1" } }
        },
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage3#1.2" } }
        },
        {
            // CONTENT
            "statement": "MERGE (c:Content {value: $c.value})",
            "parameters": { "c": { "value": "MyProperty3Item1Content" } }
        },
        {
            // PROPERTY
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})",
            "parameters": { "p": { "checksum": "3bad72fa546ec709e46ef8bba4bb9b69", "type": "MyProperty3Type"} }
        },
        {
            // REFERENCE
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": { "checksum": "3bad72fa546ec709e46ef8bba4bb9b69" },
                "r": { "destination": "http://myhost/myfolder/myotherpage3#1.1" },
                "ref": {"type": "MyReference3Item1.1Type", "name": "my_reference_3Item1", "isCollection": true, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[311]/tr[311]/td[311]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[311]/tr[311]/td[3111]", "offset": 120 }}}
            }
        },
        {
            // REFERENCE
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": { "checksum": "3bad72fa546ec709e46ef8bba4bb9b69" },
                "r": { "destination": "http://myhost/myfolder/myotherpage3#1.2" },
                "ref": {"type": "MyReference3Item1.2Type", "name": "my_reference_3Item1", "isCollection": true, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[312]/tr[312]/td[312]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[312]/tr[312]/td[3122]", "offset": 120 }}}
            }
        },
        {
            // READS
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(c:Content {value: $c.value})\n" +
            "MERGE (p)-[:Reads]->(c)",
            "parameters": {
                "p": { "checksum": "3bad72fa546ec709e46ef8bba4bb9b69" },
                "c": { "value": "MyProperty3Item1Content" }
            }
        },
        {
            // CONTENT
            "statement": "MERGE (c:Content {value: $c.value})",
            "parameters": { "c": { "value": "MyProperty3Item2Content" } }
        },
        {
            // PROPERTY
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})",
            "parameters": { "p": { "checksum": "e83e29c8456a74d45b0813dea04bdf83", "type": "MyProperty3Type"} }
        },
        {
            // READS
            "statement":
            "MATCH" +
            "(p:Property {checksum: $p.checksum})," +
            "(c:Content {value: $c.value})\n" +
            "MERGE (p)-[:Reads]->(c)",
            "parameters": {
                "p": { "checksum": "e83e29c8456a74d45b0813dea04bdf83" },
                "c": { "value": "MyProperty3Item2Content" }
            }
        },
        {
            // CONTENT
            "parameters": {
                "c": {
                    "value": "MyProperty4.1Item1Content"
                }
            },
            "statement": "MERGE (c:Content {value: $c.value})"
        },
        {
            // PROPERTY
            "parameters": {
                "p": {
                    "checksum": "2f135c725f323a72162e46756b94b752",
                    "type": "MyProperty4.1Type"
                }
            },
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})"
        },
        {
            // READS
            "parameters": {
                "c": {
                    "value": "MyProperty4.1Item1Content"
                },
                "p": {
                    "checksum": "2f135c725f323a72162e46756b94b752"
                }
            },
            "statement": "MATCH(p:Property {checksum: $p.checksum}),(c:Content {value: $c.value})\nMERGE (p)-[:Reads]->(c)"
        },
        {
            // CONTENT
            "parameters": {
                "c": {
                    "value": "MyProperty4.1Item2Content"
                }
            },
            "statement": "MERGE (c:Content {value: $c.value})"
        },
        {
            // PROPERTY
            "parameters": {
                "p": {
                    "checksum": "a2d05ca87a0e0c40520b35dddc7deecf",
                    "type": "MyProperty4.1Type"
                }
            },
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})"
        },
        {
            // READS
            "parameters": {
                "c": {
                    "value": "MyProperty4.1Item2Content"
                },
                "p": {
                    "checksum": "a2d05ca87a0e0c40520b35dddc7deecf"
                }
            },
            "statement": "MATCH(p:Property {checksum: $p.checksum}),(c:Content {value: $c.value})\nMERGE (p)-[:Reads]->(c)"
        },
        {
            // CONTENT
            "parameters": {
                "c": {
                    "value": "MyProperty4Content"
                }
            },
            "statement": "MERGE (c:Content {value: $c.value})"
        },
        {
            // PROPERTY
            "parameters": {
                "p": {
                    "checksum": "54bef3fc80f005f069b989473ee2b900",
                    "type": "MyProperty4Type"
                }
            },
            "statement": "MERGE (p:Property {checksum: $p.checksum,type: $p.type})"
        },
        {
            // OWNS
            "parameters": {
                "o": {
                    "isCollection": true,
                    "name": "my_property_4.1",
                    "selector": {
                        "endSelector": {
                            "offset": 120,
                            "type": "XPathSelector",
                            "value": "//p[411]/span[411]/span[4111]"
                        },
                        "startSelector": {
                            "offset": 0,
                            "type": "XPathSelector",
                            "value": "//p[411]/span[411]/span[411]"
                        },
                        "type": "RangeSelector"
                    }
                },
                "p1": {
                    "checksum": "54bef3fc80f005f069b989473ee2b900"
                },
                "p2": {
                    "checksum": "2f135c725f323a72162e46756b94b752"
                }
            },
            "statement": "MATCH(p1:Property {checksum: $p1.checksum}),(p2:Property {checksum: $p2.checksum})\nMERGE (p1)-[o:Owns {name: $o.name,isCollection: $o.isCollection,selectorType: $o.selector.type,startSelectorType: $o.selector.startSelector.type,startSelectorValue: $o.selector.startSelector.value,startSelectorOffset: $o.selector.startSelector.offset,endSelectorType: $o.selector.endSelector.type,endSelectorValue: $o.selector.endSelector.value,endSelectorOffset: $o.selector.endSelector.offset}]->(p2)"
        },
        {
            // OWNS
            "parameters": {
                "o": {
                    "isCollection": true,
                    "name": "my_property_4.1",
                    "selector": {
                        "endSelector": {
                            "offset": 120,
                            "type": "XPathSelector",
                            "value": "//p[412]/span[412]/span[4122]"
                        },
                        "startSelector": {
                            "offset": 0,
                            "type": "XPathSelector",
                            "value": "//p[412]/span[412]/span[412]"
                        },
                        "type": "RangeSelector"
                    }
                },
                "p1": {
                    "checksum": "54bef3fc80f005f069b989473ee2b900"
                },
                "p2": {
                    "checksum": "a2d05ca87a0e0c40520b35dddc7deecf"
                }
            },
            "statement": "MATCH(p1:Property {checksum: $p1.checksum}),(p2:Property {checksum: $p2.checksum})\nMERGE (p1)-[o:Owns {name: $o.name,isCollection: $o.isCollection,selectorType: $o.selector.type,startSelectorType: $o.selector.startSelector.type,startSelectorValue: $o.selector.startSelector.value,startSelectorOffset: $o.selector.startSelector.offset,endSelectorType: $o.selector.endSelector.type,endSelectorValue: $o.selector.endSelector.value,endSelectorOffset: $o.selector.endSelector.offset}]->(p2)"
        },
        {
            // READS
            "parameters": {
                "c": {
                    "value": "MyProperty4Content"
                },
                "p": {
                    "checksum": "54bef3fc80f005f069b989473ee2b900"
                }
            },
            "statement": "MATCH(p:Property {checksum: $p.checksum}),(c:Content {value: $c.value})\nMERGE (p)-[:Reads]->(c)"
        },
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage1" } }
        },
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage2" } }
        },
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage3" } }
        },
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage4#1" } }
        },
        {
            // RESOURCE
            "statement": "MERGE (r:Resource {url: $r.destination})",
            "parameters": { "r": { "destination": "http://myhost/myfolder/myotherpage4#2" } }
        },
        {
            // PAGE
            "statement":
            "MERGE (p:Resource {url: $p.url})\n" +
            "SET p :Page\n" +
            "SET p.type = $p.type, p.status = $p.status\n" +
            "WITH p\n" +
            "OPTIONAL MATCH (p)-[e]->()\n" +
            "DELETE e",
            "parameters": { "p": {"type": "MyPageType", "url": "http://myhost/myfolder/mypage", "status": "Classified"} }
        },
        {
            // PAGE OWNS
            "statement":
            "MATCH" +
            "(p:Resource {url: $p.url})," +
            "(prop:Property {checksum: $prop.checksum})\n" +
            "MERGE (p)-[o:Owns {" +
            "name: $o.name," +
            "isCollection: $o.isCollection," +
            "selectorType: $o.selector.type," +
            "startSelectorType: $o.selector.startSelector.type," +
            "startSelectorValue: $o.selector.startSelector.value," +
            "startSelectorOffset: $o.selector.startSelector.offset," +
            "endSelectorType: $o.selector.endSelector.type," +
            "endSelectorValue: $o.selector.endSelector.value," +
            "endSelectorOffset: $o.selector.endSelector.offset" +
            "}]->(prop)",
            "parameters": {
                "p": {"url": "http://myhost/myfolder/mypage"},
                "prop": { "checksum": "b5b995a982a99fd06cb36938d60b8a96" },
                "o": {"name": "my_property_1", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//p[1]/span[1]/span[1]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//p[1]/span[1]/span[11]", "offset": 120 }}}
            }
        },
        {
            // PAGE OWNS
            "statement":
            "MATCH" +
            "(p:Resource {url: $p.url})," +
            "(prop:Property {checksum: $prop.checksum})\n" +
            "MERGE (p)-[o:Owns {" +
            "name: $o.name," +
            "isCollection: $o.isCollection," +
            "selectorType: $o.selector.type," +
            "startSelectorType: $o.selector.startSelector.type," +
            "startSelectorValue: $o.selector.startSelector.value," +
            "startSelectorOffset: $o.selector.startSelector.offset," +
            "endSelectorType: $o.selector.endSelector.type," +
            "endSelectorValue: $o.selector.endSelector.value," +
            "endSelectorOffset: $o.selector.endSelector.offset" +
            "}]->(prop)",
            "parameters": {
                "p": {"url": "http://myhost/myfolder/mypage"},
                "prop": { "checksum": "c48ca97c86120867f45580b1e58b4e05" },
                "o": {"name": "my_property_2", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//p[2]/span[2]/span[2]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//p[2]/span[2]/span[22]", "offset": 120 }}}
            }
        },
        {
            // PAGE OWNS
            "statement":
            "MATCH" +
            "(p:Resource {url: $p.url})," +
            "(prop:Property {checksum: $prop.checksum})\n" +
            "MERGE (p)-[o:Owns {" +
            "name: $o.name," +
            "isCollection: $o.isCollection," +
            "selectorType: $o.selector.type," +
            "startSelectorType: $o.selector.startSelector.type," +
            "startSelectorValue: $o.selector.startSelector.value," +
            "startSelectorOffset: $o.selector.startSelector.offset," +
            "endSelectorType: $o.selector.endSelector.type," +
            "endSelectorValue: $o.selector.endSelector.value," +
            "endSelectorOffset: $o.selector.endSelector.offset" +
            "}]->(prop)",
            "parameters": {
                "p": {"url": "http://myhost/myfolder/mypage"},
                "prop": { "checksum": "3bad72fa546ec709e46ef8bba4bb9b69" },
                "o": {"name": "my_property_3", "isCollection": true, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//p[31]/span[31]/span[31]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//p[31]/span[31]/span[311]", "offset": 120 }}}
            }
        },
        {
            // PAGE OWNS
            "statement":
            "MATCH" +
            "(p:Resource {url: $p.url})," +
            "(prop:Property {checksum: $prop.checksum})\n" +
            "MERGE (p)-[o:Owns {" +
            "name: $o.name," +
            "isCollection: $o.isCollection," +
            "selectorType: $o.selector.type," +
            "startSelectorType: $o.selector.startSelector.type," +
            "startSelectorValue: $o.selector.startSelector.value," +
            "startSelectorOffset: $o.selector.startSelector.offset," +
            "endSelectorType: $o.selector.endSelector.type," +
            "endSelectorValue: $o.selector.endSelector.value," +
            "endSelectorOffset: $o.selector.endSelector.offset" +
            "}]->(prop)",
            "parameters": {
                "p": {"url": "http://myhost/myfolder/mypage"},
                "prop": { "checksum": "e83e29c8456a74d45b0813dea04bdf83" },
                "o": {"isCollection": true, "name": "my_property_3", "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//p[32]/span[32]/span[32]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//p[32]/span[32]/span[322]", "offset": 120 }}}
            }
        },
        {
            // PAGE OWNS
            "parameters": {
                "o": {
                    "isCollection": false,
                    "name": "my_property_4",
                    "selector": {
                        "endSelector": {
                            "offset": 120,
                            "type": "XPathSelector",
                            "value": "//p[4]/span[4]/span[44]"
                        },
                        "startSelector": {
                            "offset": 0,
                            "type": "XPathSelector",
                            "value": "//p[4]/span[4]/span[4]"
                        },
                        "type": "RangeSelector"
                    }
                },
                "p": {
                    "url": "http://myhost/myfolder/mypage"
                },
                "prop": {
                    "checksum": "54bef3fc80f005f069b989473ee2b900"
                }
            },
            "statement": "MATCH(p:Resource {url: $p.url}),(prop:Property {checksum: $prop.checksum})\nMERGE (p)-[o:Owns {name: $o.name,isCollection: $o.isCollection,selectorType: $o.selector.type,startSelectorType: $o.selector.startSelector.type,startSelectorValue: $o.selector.startSelector.value,startSelectorOffset: $o.selector.startSelector.offset,endSelectorType: $o.selector.endSelector.type,endSelectorValue: $o.selector.endSelector.value,endSelectorOffset: $o.selector.endSelector.offset}]->(prop)"
        },
        {
            // PAGE REFERENCE
            "statement":
            "MATCH" +
            "(p:Resource {url: $p.url})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": {"url": "http://myhost/myfolder/mypage"},
                "r": { "destination": "http://myhost/myfolder/myotherpage1" },
                "ref": {"name":"my_reference_1", "type": "MyReference1Type", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[1]/tr[1]/td[1]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[1]/tr[1]/td[11]", "offset": 120 }}}
            }
        },
        {
            // PAGE REFERENCE
            "statement":
            "MATCH" +
            "(p:Resource {url: $p.url})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": {"url": "http://myhost/myfolder/mypage"},
                "r": { "destination": "http://myhost/myfolder/myotherpage2" },
                "ref": {"name":"my_reference_2", "type": "MyReference2Type", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[2]/tr[2]/td[2]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[2]/tr[2]/td[22]", "offset": 120 }}}
            }
        },
        {
            // PAGE REFERENCE
            "statement":
            "MATCH" +
            "(p:Resource {url: $p.url})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": {"url": "http://myhost/myfolder/mypage"},
                "r": { "destination": "http://myhost/myfolder/myotherpage3" },
                "ref": {"name":"my_reference_3", "type": "MyReference3Type", "isCollection": false, "selector": {"type": "RangeSelector","startSelector": { "type": "XPathSelector", "value": "//table[3]/tr[3]/td[3]","offset": 0 },"endSelector": { "type": "XPathSelector", "value": "//table[3]/tr[3]/td[33]", "offset": 120 }}}
            }
        },
        {
            // PAGE REFERENCE
            "statement":
            "MATCH" +
            "(p:Resource {url: $p.url})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": { "url": "http://myhost/myfolder/mypage" },
                "r": { "destination": "http://myhost/myfolder/myotherpage4#1" },
                "ref": {
                    "isCollection": true,
                    "name": "my_reference_4",
                    "selector": {
                        "endSelector": {
                            "offset": 120,
                            "type": "XPathSelector",
                            "value": "//table[41]/tr[41]/td[411]"
                        },
                        "startSelector": {
                            "offset": 0,
                            "type": "XPathSelector",
                            "value": "//table[41]/tr[41]/td[41]"
                        },
                        "type": "RangeSelector"
                    },
                    "type": "MyReference4.1Type"
                }
            }
        },
        {
            "statement":
            "MATCH" +
            "(p:Resource {url: $p.url})," +
            "(r:Resource {url: $r.destination})\n" +
            "MERGE (p)-[:References {" +
            "name: $ref.name," +
            "type: $ref.type," +
            "isCollection: $ref.isCollection," +
            "selectorType: $ref.selector.type," +
            "startSelectorType: $ref.selector.startSelector.type," +
            "startSelectorValue: $ref.selector.startSelector.value," +
            "startSelectorOffset: $ref.selector.startSelector.offset," +
            "endSelectorType: $ref.selector.endSelector.type," +
            "endSelectorValue: $ref.selector.endSelector.value," +
            "endSelectorOffset: $ref.selector.endSelector.offset" +
            "}]->(r)",
            "parameters": {
                "p": { "url": "http://myhost/myfolder/mypage" },
                "r": { "destination": "http://myhost/myfolder/myotherpage4#2" },
                "ref": {
                    "isCollection": true,
                    "name": "my_reference_4",
                    "selector": {
                        "endSelector": {
                            "offset": 120,
                            "type": "XPathSelector",
                            "value": "//table[42]/tr[42]/td[422]"
                        },
                        "startSelector": {
                            "offset": 0,
                            "type": "XPathSelector",
                            "value": "//table[42]/tr[42]/td[42]"
                        },
                        "type": "RangeSelector"
                    },
                    "type": "MyReference4.2Type"
                }
            }
        },
        {
            // CLEAN UP
            "statement":
                "OPTIONAL MATCH (c:Property) WHERE NOT (:Page)-[:Owns*]->(c)\n" +
                "DETACH DELETE c\n" +

                "WITH {} AS d\n" +

                "OPTIONAL MATCH (q:Content) WHERE NOT (:Property)-[:Reads]->(q)\n" +
                "DELETE q",
            "parameters": {}
        }
    ]
};