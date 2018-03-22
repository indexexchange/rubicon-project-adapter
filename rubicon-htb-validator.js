/**
 * @author:    Partner
 * @license:   UNLICENSED
 *
 * @copyright: Copyright (c) 2017 by Index Exchange. All rights reserved.
 *
 * The information contained within this document is confidential, copyrighted
 * and or a trade secret. No part of this document may be reproduced or
 * distributed in any form or by any means, in whole or in part, without the
 * prior written permission of Index Exchange.
 */

'use strict';

////////////////////////////////////////////////////////////////////////////////
// Dependencies ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var Inspector = require('../../../libs/external/schema-inspector.js');

////////////////////////////////////////////////////////////////////////////////
// Main ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var partnerValidator = function (configs) {
    var result = Inspector.validate({
        type: 'object',
        properties: {
            accountId: {
                type: 'string',
                minLength: 1
            },
            xSlots: {
                type: 'object',
                properties: {
                    '*': {
                        type: 'object',
                        properties: {
                            siteId: {
                                type: 'string',
                                minLength: 1
                            },
                            zoneId: {
                                type: 'string',
                                minLength: 1
                            },
                            sizes: {
                                type: 'array',
                                minLength: 1,
                                items: {
                                    type: 'array',
                                    exactLength: 2,
                                    items: {
                                        type: 'integer'
                                    }
                                }
                            },
                            slotFpd: {
                                optional: true,
                                type: 'object',
                                strict: true,
                                properties: {
                                    inventory: {
                                        optional: true,
                                        type: 'object',
                                        strict: true,
                                        properties: {
                                            vars: {
                                                optional: true,
                                                type: 'object',
                                                properties: {
                                                    '*': {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string',
                                                            minLength: 1
                                                        }
                                                    }
                                                }
                                            },
                                            strs: {
                                                optional: true,
                                                type: 'object',
                                                properties: {
                                                    '*': {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string',
                                                            minLength: 1
                                                        }
                                                    }
                                                }
                                            },
                                            fns: {
                                                optional: true,
                                                type: 'object',
                                                properties: {
                                                    '*': {
                                                        type: 'object',
                                                        strict: true,
                                                        properties: {
                                                            fn: {
                                                                type: 'string',
                                                                minLength: 1
                                                            },
                                                            args: {
                                                                type: 'array',
                                                                items: {
                                                                    type: 'string',
                                                                    minLength: 1
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    visitor: {
                                        optional: true,
                                        type: 'object',
                                        strict: true,
                                        properties: {
                                            vars: {
                                                optional: true,
                                                type: 'object',
                                                properties: {
                                                    '*': {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string',
                                                            minLength: 1
                                                        }
                                                    }
                                                }
                                            },
                                            strs: {
                                                optional: true,
                                                type: 'object',
                                                properties: {
                                                    '*': {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string',
                                                            minLength: 1
                                                        }
                                                    }
                                                }
                                            },
                                            fns: {
                                                optional: true,
                                                type: 'object',
                                                properties: {
                                                    '*': {
                                                        type: 'object',
                                                        strict: true,
                                                        properties: {
                                                            fn: {
                                                                type: 'string',
                                                                minLength: 1
                                                            },
                                                            args: {
                                                                type: 'array',
                                                                items: {
                                                                    type: 'string',
                                                                    minLength: 1
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    position: {
                                        optional: true,
                                        type: 'string',
                                        eq: ['atf', 'btf']
                                    },
                                    keywords: {
                                        optional: true,
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            minLength: 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            partnerFpd: {
                optional: true,
                strict: true,
                type: 'object',
                properties: {
                    inventory: {
                        optional: true,
                        type: 'object',
                        strict: true,
                        properties: {
                            vars: {
                                optional: true,
                                type: 'object',
                                properties: {
                                    '*': {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            minLength: 1
                                        }
                                    }
                                }
                            },
                            strs: {
                                optional: true,
                                type: 'object',
                                properties: {
                                    '*': {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            minLength: 1
                                        }
                                    }
                                }
                            },
                            fns: {
                                optional: true,
                                type: 'object',
                                properties: {
                                    '*': {
                                        type: 'object',
                                        strict: true,
                                        properties: {
                                            fn: {
                                                type: 'string',
                                                minLength: 1
                                            },
                                            args: {
                                                type: 'array',
                                                items: {
                                                    type: 'string',
                                                    minLength: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    keywords: {
                        optional: true,
                        type: 'array',
                        items: {
                            type: 'string',
                            minLength: 1
                        }
                    },
                    visitor: {
                        optional: true,
                        type: 'object',
                        strict: true,
                        properties: {
                            vars: {
                                optional: true,
                                type: 'object',
                                properties: {
                                    '*': {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            minLength: 1
                                        }
                                    }
                                }
                            },
                            strs: {
                                optional: true,
                                type: 'object',
                                properties: {
                                    '*': {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            minLength: 1
                                        }
                                    }
                                }
                            },
                            fns: {
                                optional: true,
                                type: 'object',
                                properties: {
                                    '*': {
                                        type: 'object',
                                        strict: true,
                                        properties: {
                                            fn: {
                                                type: 'string',
                                                minLength: 1
                                            },
                                            args: {
                                                type: 'array',
                                                items: {
                                                    type: 'string',
                                                    minLength: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, configs);

    if (!result.valid) {
        return result.format();
    }

    return null;
};

module.exports = partnerValidator;
