// --
// Copyright (C) 2001-2020 OTRS AG, https://otrs.com/\n";
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (GPL). If you
// did not receive this file, see https://www.gnu.org/licenses/gpl-3.0.txt.
// --

"use strict";

var Core = Core || {};
Core.UI = Core.UI || {};

/**
 * @namespace
 * @exports TargetNS as Core.UI.ComboBox
 * @description
 *      This namespace contains the functions for the combobox element.
 */
Core.UI.ComboBox = (function (TargetNS) {
    /**
     * @function
     * @param {String} Selector The jQuery selector for the elements that should be initialized as comboboxes
     * @param {Object} Options The additional options for the combobox:
     *                      Class: a string with the class(es) to be added to the input field of the combobox
     *                      Lang: an object with key/value pairs of translations for the combobox
     * @description
     *      This function initializes the comboboxes
     * @return nothing
     */
    TargetNS.Init = function (Selector, Options) {
        Selector = Selector || 'select';
        $(Selector).combobox(Options);
    };

    return TargetNS;
}(Core.UI.ComboBox || {}));
