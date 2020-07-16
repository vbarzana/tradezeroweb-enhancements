'use strict';

window.Enhancer = {
  startCollapsed: true,
  isPnlCollapsed: false,
  __init: function () {
    this.addToggableSection();
    if (this.startCollapsed) {
      this.togglePnl();
    }
    setTimeout(this.bindPortfolioSymbolClicks.bind(this), 3000);
  },

  addToggableSection: function () {
    this.ePnlSection = $('#page-header-container');
    this.ePnlSubstitute = $('#trading-order-container-substitute');
    this.ePnlSubstitute.remove();
    this.toggleButton = $(
      $(
        '<span id="pnl-toggler" class="icon-box icon-toggle"></span>'
      ).insertAfter(this.ePnlSection)[0]
    );
    this.toggleButton.on('click', this.togglePnl.bind(this));
  },

  togglePnl: function () {
    if (!this.isPnlCollapsed) {
      this.toggleButton.css({ transform: 'scaleY(1)' });
      this.isPnlCollapsed = true;
      this.ePnlSection.slideUp();
    } else {
      this.toggleButton.css({ transform: 'scaleY(-1)' });
      this.isPnlCollapsed = false;
      this.ePnlSection.slideDown();
    }
  },

  bindPortfolioSymbolClicks: function () {
    var allSymbols = $('#portfolio-contents-1 .table-2.opTable tr').find(
      'td:first'
    );

    allSymbols.each(
      function (pos, symbol) {
        var symbol = $(symbol);
        symbol.on('click', this.handleSymbolClick.bind(this, symbol));
      }.bind(this)
    );
  },

  handleSymbolClick: function (symbol) {
    var eQuantity = $('#trading-order-input-quantity');
    eQuantity.val(symbol.next().next().html());
  }
};

$(document).ready(function () {
  window.Enhancer.__init();
});
