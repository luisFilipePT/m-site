/**
 * Created by luis on 17/05/16.
 */

module.exports = {

    blockAndLoad: function (container, addNew, noLoader) {
        // remove any blocks on the container
        if ($(container).find('.block').length > 0) $(container).find('.block').remove();
        if ($(container).find('.blockAndLoad').length > 0) $(container).find('.blockAndLoad').remove();

        // add the block to the container
        if (addNew) {
            if (noLoader) {
                $(container).append('<div class="block"></div>');
            }
            else {
                $(container).append('<div class="blockAndLoad"><div class="loader"></div></div>');
            }
        }
    }
};