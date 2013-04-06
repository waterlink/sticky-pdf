// Generated by CoffeeScript 1.6.2
(function() {
  var Docs, Rest,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Rest = require("./rest");

  Docs = (function(_super) {
    var Stickers, _ref;

    __extends(Docs, _super);

    Stickers = (function(_super1) {
      __extends(Stickers, _super1);

      function Stickers() {
        _ref = Stickers.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Stickers.prototype.read = function(read, res) {
        return res.send("sticker is here!");
      };

      Stickers.prototype.create = function(read, res) {
        return res.send("sticker is here!");
      };

      return Stickers;

    })(Rest);

    function Docs(app, prefix) {
      this.app = app;
      this.prefix = prefix;
      this.stickers = new Stickers(this.app, "" + this.prefix + "/stickers");
      Docs.__super__.constructor.call(this, this.app, this.prefix);
    }

    Docs.prototype.read = function(req, res) {
      var docs;

      console.log("get list of documents");
      docs = [
        {
          entity_id: "h45gm432k",
          title: "Hello world",
          entity_id: "34jh5gjh2",
          title: "Test task, level 3",
          entity_id: "34jh5gjh3",
          title: "Test task, level 1",
          entity_id: "34jh5gjh4",
          title: "Test task, level 2",
          entity_id: "34jh5gjh5",
          title: "Test task, level 4",
          entity_id: "34jh5gjh6",
          title: "Test task, level 5",
          entity_id: "34jh5gjh7",
          title: "Test task, level 6"
        }
      ];
      console.log("render it");
      return res.render("docs", {
        docs: docs
      });
    };

    Docs.prototype.create = function(req, res) {
      return res.send("docs::create");
    };

    Docs.prototype.update = function(req, res) {
      return res.send("docs::update");
    };

    Docs.prototype["delete"] = function(req, res) {
      return res.send("docs::delete");
    };

    Docs.prototype.readid = function(req, res) {
      console.log("i am here :)");
      return res.send("docs::readid" + req.params.id);
    };

    Docs.prototype.createid = function(req, res) {
      console.log("i am here :)");
      return res.send("docs::createid" + req.params.id + "\n");
    };

    return Docs;

  })(Rest);

  exports.Docs = Docs;

}).call(this);
