/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.11.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the StorageAccountUpdateParameters class.
 * @constructor
 * The parameters to update on the account.
 * @member {string} [accountType] Gets or sets the account type. Note that
 * StandardZRS and PremiumLRS accounts cannot be changed to other account
 * types, and other account types cannot be changed to StandardZRS or
 * PremiumLRS. Possible values for this property include: 'Standard_LRS',
 * 'Standard_ZRS', 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS'.
 * 
 * @member {object} [customDomain] User domain assigned to the storage
 * account. Name is the CNAME source. Only one custom domain is supported per
 * storage account at this time. To clear the existing custom domain, use an
 * empty string for the custom domain name property.
 * 
 * @member {string} [customDomain.name] Gets or sets the custom domain name.
 * Name is the CNAME source.
 * 
 * @member {boolean} [customDomain.useSubDomain] Indicates whether indirect
 * CName validation is enabled. Default value is false. This should only be
 * set on updates
 * 
 */
function StorageAccountUpdateParameters(parameters) {
  StorageAccountUpdateParameters['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.accountType !== undefined) {
      this.accountType = parameters.accountType;
    }
    if (parameters.customDomain) {
      this.customDomain = new models['CustomDomain'](parameters.customDomain);
    }
  }    
}

util.inherits(StorageAccountUpdateParameters, models['Resource']);

/**
 * Validate the payload against the StorageAccountUpdateParameters schema
 *
 * @param {JSON} payload
 *
 */
StorageAccountUpdateParameters.prototype.serialize = function () {
  var payload = StorageAccountUpdateParameters['super_'].prototype.serialize.call(this);
  if (this['accountType'] !== null && this['accountType'] !== undefined) {
    var allowedValues = [ 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS' ];
    var thisaccountType = this['accountType'];
    if (!allowedValues.some( function(item) { return item === thisaccountType; })) {
      throw new Error(this['accountType'] + ' is not a valid value. The valid values are: ' + allowedValues);
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['accountType'] = this['accountType'];
  }

  if (this['customDomain']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['customDomain'] = this['customDomain'].serialize();
  }

  return payload;
};

/**
 * Deserialize the instance to StorageAccountUpdateParameters schema
 *
 * @param {JSON} instance
 *
 */
StorageAccountUpdateParameters.prototype.deserialize = function (instance) {
  StorageAccountUpdateParameters['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['accountType'] !== undefined) {
        this['accountType'] = instance['properties']['accountType'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['customDomain']) {
        this['customDomain'] = new models['CustomDomain']().deserialize(instance['properties']['customDomain']);
      }
    }
  }

  return this;
};

module.exports = StorageAccountUpdateParameters;