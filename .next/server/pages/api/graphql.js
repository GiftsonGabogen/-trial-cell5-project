module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/graphql.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apollo/resolvers.ts":
/*!*****************************!*\
  !*** ./apollo/resolvers.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\nconst Movie = __webpack_require__(/*! ../models/Movie.model */ \"./models/Movie.model.js\");\n\n\nconst resolvers = {\n  Query: {\n    getMovies: () => {\n      const data = Movie.find().then(res => {\n        return res;\n      });\n      return {\n        success: true,\n        message: \"got all Movies\",\n        movies: data\n      };\n    },\n    getMovie: async (_, {\n      _id\n    }) => {\n      const data = await Movie.find({\n        _id: _id\n      }).then(res => {\n        return res[0];\n      });\n      return {\n        success: true,\n        message: \"got movie\",\n        movie: data\n      };\n    }\n  },\n  Mutation: {\n    addMovie: async (_, {\n      name,\n      myrate\n    }) => {\n      const newMovie = new Movie({\n        _id: new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].ObjectId(),\n        name,\n        myrate\n      });\n      const data = await newMovie.save();\n      return {\n        success: true,\n        message: \"added Movie Successfully\",\n        movie: data\n      };\n    },\n    deleteMovie: async (_, {\n      _id\n    }) => {\n      const data = await Movie.findByIdAndDelete(_id);\n      return {\n        success: true,\n        message: \"deleted Movie Successfully\",\n        movie: data\n      };\n    },\n    updateMovie: async (_, {\n      _id,\n      name,\n      myrate\n    }) => {\n      const data = await Movie.findByIdAndUpdate(_id, {\n        $set: {\n          name,\n          myrate\n        }\n      }, {\n        new: true\n      });\n      return {\n        success: true,\n        message: \"added Movie Successfully\",\n        movie: data\n      };\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolvers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vcmVzb2x2ZXJzLnRzPzFlOWUiXSwibmFtZXMiOlsiTW92aWUiLCJyZXF1aXJlIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJnZXRNb3ZpZXMiLCJkYXRhIiwiZmluZCIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwibWVzc2FnZSIsIm1vdmllcyIsImdldE1vdmllIiwiXyIsIl9pZCIsIm1vdmllIiwiTXV0YXRpb24iLCJhZGRNb3ZpZSIsIm5hbWUiLCJteXJhdGUiLCJuZXdNb3ZpZSIsIm1vbmdvb3NlIiwiT2JqZWN0SWQiLCJzYXZlIiwiZGVsZXRlTW92aWUiLCJmaW5kQnlJZEFuZERlbGV0ZSIsInVwZGF0ZU1vdmllIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCIkc2V0IiwibmV3Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBckI7O0FBQ0E7QUFFQSxNQUFNQyxTQUFTLEdBQUc7QUFDakJDLE9BQUssRUFBRTtBQUNOQyxhQUFTLEVBQUUsTUFBTTtBQUNoQixZQUFNQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sSUFBTixHQUFhQyxJQUFiLENBQWtCQyxHQUFHLElBQUk7QUFDckMsZUFBT0EsR0FBUDtBQUNBLE9BRlksQ0FBYjtBQUdBLGFBQU87QUFDTkMsZUFBTyxFQUFFLElBREg7QUFFTkMsZUFBTyxFQUFFLGdCQUZIO0FBR05DLGNBQU0sRUFBRU47QUFIRixPQUFQO0FBS0EsS0FWSztBQVdOTyxZQUFRLEVBQUUsT0FBT0MsQ0FBUCxFQUFVO0FBQUVDO0FBQUYsS0FBVixLQUFzQjtBQUMvQixZQUFNVCxJQUFJLEdBQUcsTUFBTUwsS0FBSyxDQUFDTSxJQUFOLENBQVc7QUFBRVEsV0FBRyxFQUFFQTtBQUFQLE9BQVgsRUFBeUJQLElBQXpCLENBQThCQyxHQUFHLElBQUk7QUFDdkQsZUFBT0EsR0FBRyxDQUFDLENBQUQsQ0FBVjtBQUNBLE9BRmtCLENBQW5CO0FBR0EsYUFBTztBQUNOQyxlQUFPLEVBQUUsSUFESDtBQUVOQyxlQUFPLEVBQUUsV0FGSDtBQUdOSyxhQUFLLEVBQUVWO0FBSEQsT0FBUDtBQUtBO0FBcEJLLEdBRFU7QUF1QmpCVyxVQUFRLEVBQUU7QUFDVEMsWUFBUSxFQUFFLE9BQU9KLENBQVAsRUFBVTtBQUFFSyxVQUFGO0FBQVFDO0FBQVIsS0FBVixLQUErQjtBQUN4QyxZQUFNQyxRQUFRLEdBQUcsSUFBSXBCLEtBQUosQ0FBVTtBQUMxQmMsV0FBRyxFQUFFLElBQUlPLDhDQUFBLENBQWVDLFFBQW5CLEVBRHFCO0FBRTFCSixZQUYwQjtBQUcxQkM7QUFIMEIsT0FBVixDQUFqQjtBQUtBLFlBQU1kLElBQUksR0FBRyxNQUFNZSxRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFDQSxhQUFPO0FBQ05kLGVBQU8sRUFBRSxJQURIO0FBRU5DLGVBQU8sRUFBRSwwQkFGSDtBQUdOSyxhQUFLLEVBQUVWO0FBSEQsT0FBUDtBQUtBLEtBYlE7QUFjVG1CLGVBQVcsRUFBRSxPQUFPWCxDQUFQLEVBQVU7QUFBRUM7QUFBRixLQUFWLEtBQXNCO0FBQ2xDLFlBQU1ULElBQUksR0FBRyxNQUFNTCxLQUFLLENBQUN5QixpQkFBTixDQUF3QlgsR0FBeEIsQ0FBbkI7QUFDQSxhQUFPO0FBQ05MLGVBQU8sRUFBRSxJQURIO0FBRU5DLGVBQU8sRUFBRSw0QkFGSDtBQUdOSyxhQUFLLEVBQUVWO0FBSEQsT0FBUDtBQUtBLEtBckJRO0FBc0JUcUIsZUFBVyxFQUFFLE9BQU9iLENBQVAsRUFBVTtBQUFFQyxTQUFGO0FBQU9JLFVBQVA7QUFBYUM7QUFBYixLQUFWLEtBQW9DO0FBQ2hELFlBQU1kLElBQUksR0FBRyxNQUFNTCxLQUFLLENBQUMyQixpQkFBTixDQUNsQmIsR0FEa0IsRUFFbEI7QUFBRWMsWUFBSSxFQUFFO0FBQUVWLGNBQUY7QUFBUUM7QUFBUjtBQUFSLE9BRmtCLEVBR2xCO0FBQUVVLFdBQUcsRUFBRTtBQUFQLE9BSGtCLENBQW5CO0FBS0EsYUFBTztBQUNOcEIsZUFBTyxFQUFFLElBREg7QUFFTkMsZUFBTyxFQUFFLDBCQUZIO0FBR05LLGFBQUssRUFBRVY7QUFIRCxPQUFQO0FBS0E7QUFqQ1E7QUF2Qk8sQ0FBbEI7QUE0RGVILHdFQUFmIiwiZmlsZSI6Ii4vYXBvbGxvL3Jlc29sdmVycy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmllID0gcmVxdWlyZShcIi4uL21vZGVscy9Nb3ZpZS5tb2RlbFwiKTtcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCByZXNvbHZlcnMgPSB7XG5cdFF1ZXJ5OiB7XG5cdFx0Z2V0TW92aWVzOiAoKSA9PiB7XG5cdFx0XHRjb25zdCBkYXRhID0gTW92aWUuZmluZCgpLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0bWVzc2FnZTogXCJnb3QgYWxsIE1vdmllc1wiLFxuXHRcdFx0XHRtb3ZpZXM6IGRhdGFcblx0XHRcdH07XG5cdFx0fSxcblx0XHRnZXRNb3ZpZTogYXN5bmMgKF8sIHsgX2lkIH0pID0+IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBNb3ZpZS5maW5kKHsgX2lkOiBfaWQgfSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzWzBdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxuXHRcdFx0XHRtZXNzYWdlOiBcImdvdCBtb3ZpZVwiLFxuXHRcdFx0XHRtb3ZpZTogZGF0YVxuXHRcdFx0fTtcblx0XHR9XG5cdH0sXG5cdE11dGF0aW9uOiB7XG5cdFx0YWRkTW92aWU6IGFzeW5jIChfLCB7IG5hbWUsIG15cmF0ZSB9KSA9PiB7XG5cdFx0XHRjb25zdCBuZXdNb3ZpZSA9IG5ldyBNb3ZpZSh7XG5cdFx0XHRcdF9pZDogbmV3IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkKCksXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdG15cmF0ZVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgbmV3TW92aWUuc2F2ZSgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0bWVzc2FnZTogXCJhZGRlZCBNb3ZpZSBTdWNjZXNzZnVsbHlcIixcblx0XHRcdFx0bW92aWU6IGRhdGFcblx0XHRcdH07XG5cdFx0fSxcblx0XHRkZWxldGVNb3ZpZTogYXN5bmMgKF8sIHsgX2lkIH0pID0+IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBNb3ZpZS5maW5kQnlJZEFuZERlbGV0ZShfaWQpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0bWVzc2FnZTogXCJkZWxldGVkIE1vdmllIFN1Y2Nlc3NmdWxseVwiLFxuXHRcdFx0XHRtb3ZpZTogZGF0YVxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdHVwZGF0ZU1vdmllOiBhc3luYyAoXywgeyBfaWQsIG5hbWUsIG15cmF0ZSB9KSA9PiB7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgTW92aWUuZmluZEJ5SWRBbmRVcGRhdGUoXG5cdFx0XHRcdF9pZCxcblx0XHRcdFx0eyAkc2V0OiB7IG5hbWUsIG15cmF0ZSB9IH0sXG5cdFx0XHRcdHsgbmV3OiB0cnVlIH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxuXHRcdFx0XHRtZXNzYWdlOiBcImFkZGVkIE1vdmllIFN1Y2Nlc3NmdWxseVwiLFxuXHRcdFx0XHRtb3ZpZTogZGF0YVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVycztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/resolvers.ts\n");

/***/ }),

/***/ "./apollo/typeDefs.ts":
/*!****************************!*\
  !*** ./apollo/typeDefs.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n\ttype Movie {\n\t\t_id: ID!\n\t\tname: String\n\t\tmyrate: Int\n\t}\n\n\ttype getMoviesPayload {\n\t\tsuccess: Boolean!\n\t\tmessage: String\n\t\tmovies: [Movie]\n\t}\n\n\ttype getMoviePayload {\n\t\tsuccess: Boolean!\n\t\tmessage: String\n\t\tmovie: Movie\n\t}\n\n\ttype addMoviePayload {\n\t\tsuccess: Boolean!\n\t\tmessage: String\n\t\tmovie: Movie\n\t}\n\n\ttype deleteMoviePayload {\n\t\tsuccess: Boolean!\n\t\tmessage: String\n\t\tmovie: Movie\n\t}\n\n\ttype updateMoviePayload {\n\t\tsuccess: Boolean!\n\t\tmessage: String\n\t\tmovie: Movie\n\t}\n\n\ttype Query {\n\t\tgetMovies: getMoviesPayload\n\t\tgetMovie(_id: ID!): getMoviePayload\n\t}\n\n\ttype Mutation {\n\t\taddMovie(name: String, myrate: Int): addMoviePayload\n\t\tdeleteMovie(_id: ID): deleteMoviePayload\n\t\tupdateMovie(_id: ID, name: String, myrate: Int): updateMoviePayload\n\t}\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (typeDefs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vdHlwZURlZnMudHM/YTYyOCJdLCJuYW1lcyI6WyJ0eXBlRGVmcyIsImdxbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFyQjtBQWlEZUQsdUVBQWYiLCJmaWxlIjoiLi9hcG9sbG8vdHlwZURlZnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgdHlwZURlZnMgPSBncWxgXG5cdHR5cGUgTW92aWUge1xuXHRcdF9pZDogSUQhXG5cdFx0bmFtZTogU3RyaW5nXG5cdFx0bXlyYXRlOiBJbnRcblx0fVxuXG5cdHR5cGUgZ2V0TW92aWVzUGF5bG9hZCB7XG5cdFx0c3VjY2VzczogQm9vbGVhbiFcblx0XHRtZXNzYWdlOiBTdHJpbmdcblx0XHRtb3ZpZXM6IFtNb3ZpZV1cblx0fVxuXG5cdHR5cGUgZ2V0TW92aWVQYXlsb2FkIHtcblx0XHRzdWNjZXNzOiBCb29sZWFuIVxuXHRcdG1lc3NhZ2U6IFN0cmluZ1xuXHRcdG1vdmllOiBNb3ZpZVxuXHR9XG5cblx0dHlwZSBhZGRNb3ZpZVBheWxvYWQge1xuXHRcdHN1Y2Nlc3M6IEJvb2xlYW4hXG5cdFx0bWVzc2FnZTogU3RyaW5nXG5cdFx0bW92aWU6IE1vdmllXG5cdH1cblxuXHR0eXBlIGRlbGV0ZU1vdmllUGF5bG9hZCB7XG5cdFx0c3VjY2VzczogQm9vbGVhbiFcblx0XHRtZXNzYWdlOiBTdHJpbmdcblx0XHRtb3ZpZTogTW92aWVcblx0fVxuXG5cdHR5cGUgdXBkYXRlTW92aWVQYXlsb2FkIHtcblx0XHRzdWNjZXNzOiBCb29sZWFuIVxuXHRcdG1lc3NhZ2U6IFN0cmluZ1xuXHRcdG1vdmllOiBNb3ZpZVxuXHR9XG5cblx0dHlwZSBRdWVyeSB7XG5cdFx0Z2V0TW92aWVzOiBnZXRNb3ZpZXNQYXlsb2FkXG5cdFx0Z2V0TW92aWUoX2lkOiBJRCEpOiBnZXRNb3ZpZVBheWxvYWRcblx0fVxuXG5cdHR5cGUgTXV0YXRpb24ge1xuXHRcdGFkZE1vdmllKG5hbWU6IFN0cmluZywgbXlyYXRlOiBJbnQpOiBhZGRNb3ZpZVBheWxvYWRcblx0XHRkZWxldGVNb3ZpZShfaWQ6IElEKTogZGVsZXRlTW92aWVQYXlsb2FkXG5cdFx0dXBkYXRlTW92aWUoX2lkOiBJRCwgbmFtZTogU3RyaW5nLCBteXJhdGU6IEludCk6IHVwZGF0ZU1vdmllUGF5bG9hZFxuXHR9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlRGVmcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/typeDefs.ts\n");

/***/ }),

/***/ "./models/Movie.model.js":
/*!*******************************!*\
  !*** ./models/Movie.model.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst MovieSchema = new mongoose.Schema({\n  _id: {\n    type: mongoose.Schema.Types.ObjectId\n  },\n  name: {\n    type: String,\n    required: true\n  },\n  myrate: {\n    type: Number,\n    required: true\n  }\n});\nmodule.exports = mongoose.models.movie || mongoose.model(\"movie\", MovieSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvTW92aWUubW9kZWwuanM/NzhiYyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJNb3ZpZVNjaGVtYSIsIlNjaGVtYSIsIl9pZCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwibmFtZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibXlyYXRlIiwiTnVtYmVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIm1vdmllIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxNQUFiLENBQW9CO0FBQ3ZDQyxLQUFHLEVBQUU7QUFDSkMsUUFBSSxFQUFFTCxRQUFRLENBQUNHLE1BQVQsQ0FBZ0JHLEtBQWhCLENBQXNCQztBQUR4QixHQURrQztBQUl2Q0MsTUFBSSxFQUFFO0FBQ0xILFFBQUksRUFBRUksTUFERDtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQUppQztBQVF2Q0MsUUFBTSxFQUFFO0FBQ1BOLFFBQUksRUFBRU8sTUFEQztBQUVQRixZQUFRLEVBQUU7QUFGSDtBQVIrQixDQUFwQixDQUFwQjtBQWNBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLFFBQVEsQ0FBQ2UsTUFBVCxDQUFnQkMsS0FBaEIsSUFBeUJoQixRQUFRLENBQUNpQixLQUFULENBQWUsT0FBZixFQUF3QmYsV0FBeEIsQ0FBMUMiLCJmaWxlIjoiLi9tb2RlbHMvTW92aWUubW9kZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuY29uc3QgTW92aWVTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcblx0X2lkOiB7XG5cdFx0dHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkXG5cdH0sXG5cdG5hbWU6IHtcblx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0cmVxdWlyZWQ6IHRydWVcblx0fSxcblx0bXlyYXRlOiB7XG5cdFx0dHlwZTogTnVtYmVyLFxuXHRcdHJlcXVpcmVkOiB0cnVlXG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5tb3ZpZSB8fCBtb25nb29zZS5tb2RlbChcIm1vdmllXCIsIE1vdmllU2NoZW1hKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/Movie.model.js\n");

/***/ }),

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_typeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apollo/typeDefs */ \"./apollo/typeDefs.ts\");\n/* harmony import */ var _apollo_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apollo/resolvers */ \"./apollo/resolvers.ts\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.ts\");\n\n\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst schema = Object(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__[\"makeExecutableSchema\"])({\n  typeDefs: _apollo_typeDefs__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  resolvers: _apollo_resolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__[\"ApolloServer\"]({\n  schema: schema\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(apolloServer.createHandler({\n  path: \"/api/graphql\"\n})));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ3JhcGhxbC50cz8xNjZiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJzY2hlbWEiLCJtYWtlRXhlY3V0YWJsZVNjaGVtYSIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiYXBvbGxvU2VydmVyIiwiQXBvbGxvU2VydmVyIiwiYXBpIiwiYm9keVBhcnNlciIsImRiQ29ubmVjdCIsImNyZWF0ZUhhbmRsZXIiLCJwYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLHNCQUFELENBQVAsQ0FBa0JDLE1BQWxCOztBQUVBLE1BQU1DLE1BQU0sR0FBR0MsZ0ZBQW9CLENBQUM7QUFBRUMsb0VBQUY7QUFBWUMsc0VBQVNBO0FBQXJCLENBQUQsQ0FBbkM7QUFFQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsZ0VBQUosQ0FBaUI7QUFDckNMLFFBQU0sRUFBRUE7QUFENkIsQ0FBakIsQ0FBckI7QUFJTyxNQUFNRCxNQUFNLEdBQUc7QUFDckJPLEtBQUcsRUFBRTtBQUNKQyxjQUFVLEVBQUU7QUFEUjtBQURnQixDQUFmO0FBTVFDLCtIQUFTLENBQUNKLFlBQVksQ0FBQ0ssYUFBYixDQUEyQjtBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUEzQixDQUFELENBQXhCIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2dyYXBocWwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIsIG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItbWljcm9cIjtcbmltcG9ydCB0eXBlRGVmcyBmcm9tIFwiLi4vLi4vYXBvbGxvL3R5cGVEZWZzXCI7XG5pbXBvcnQgcmVzb2x2ZXJzIGZyb20gXCIuLi8uLi9hcG9sbG8vcmVzb2x2ZXJzXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcblxucmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcblxuY29uc3Qgc2NoZW1hID0gbWFrZUV4ZWN1dGFibGVTY2hlbWEoeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH0pO1xuXG5jb25zdCBhcG9sbG9TZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcblx0c2NoZW1hOiBzY2hlbWFcbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuXHRhcGk6IHtcblx0XHRib2R5UGFyc2VyOiBmYWxzZVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3QoYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoeyBwYXRoOiBcIi9hcGkvZ3JhcGhxbFwiIH0pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/graphql.ts\n");

/***/ }),

/***/ "./utils/dbConnect.ts":
/*!****************************!*\
  !*** ./utils/dbConnect.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* This is a database connection function*/\n\nconst connection = {};\n/* creating connection object*/\n\nconst dbConnect = handler => async (req, res) => {\n  if (mongoose__WEBPACK_IMPORTED_MODULE_0__[\"connections\"][0].readyState !== 1) {\n    try {\n      await mongoose__WEBPACK_IMPORTED_MODULE_0__[\"connect\"](process.env.MONGODB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        useCreateIndex: true,\n        useFindAndModify: false\n      });\n    } catch (err) {\n      console.error(err.message);\n      process.exit(1);\n    }\n  }\n\n  return handler(req, res);\n};\n\nconst db = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"connection\"];\ndb.once(\"open\", () => {\n  console.log(\"MongoDB connected.\");\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QudHM/OWZlMCJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1vbmdvb3NlIiwicmVhZHlTdGF0ZSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJleGl0IiwiZGIiLCJvbmNlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLEVBQW5CO0FBQXVCOztBQUV2QixNQUFNQyxTQUFTLEdBQUdDLE9BQU8sSUFBSSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDaEQsTUFBSUMsb0RBQUEsQ0FBcUIsQ0FBckIsRUFBd0JDLFVBQXhCLEtBQXVDLENBQTNDLEVBQThDO0FBQzdDLFFBQUk7QUFDSCxZQUFNRCxnREFBQSxDQUFpQkUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCLEVBQTBDO0FBQy9DQyx1QkFBZSxFQUFFLElBRDhCO0FBRS9DQywwQkFBa0IsRUFBRSxJQUYyQjtBQUcvQ0Msc0JBQWMsRUFBRSxJQUgrQjtBQUkvQ0Msd0JBQWdCLEVBQUU7QUFKNkIsT0FBMUMsQ0FBTjtBQU1BLEtBUEQsQ0FPRSxPQUFPQyxHQUFQLEVBQVk7QUFDYkMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQUcsQ0FBQ0csT0FBbEI7QUFDQVYsYUFBTyxDQUFDVyxJQUFSLENBQWEsQ0FBYjtBQUNBO0FBQ0Q7O0FBRUQsU0FBT2hCLE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLENBQWQ7QUFDQSxDQWhCRDs7QUFrQkEsTUFBTWUsRUFBRSxHQUFHZCxtREFBWDtBQUNBYyxFQUFFLENBQUNDLElBQUgsQ0FBUSxNQUFSLEVBQWdCLE1BQU07QUFDckJMLFNBQU8sQ0FBQ00sR0FBUixDQUFZLG9CQUFaO0FBQ0EsQ0FGRDtBQUllcEIsd0VBQWYiLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGlzIGEgZGF0YWJhc2UgY29ubmVjdGlvbiBmdW5jdGlvbiovXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgY29ubmVjdGlvbiA9IHt9OyAvKiBjcmVhdGluZyBjb25uZWN0aW9uIG9iamVjdCovXG5cbmNvbnN0IGRiQ29ubmVjdCA9IGhhbmRsZXIgPT4gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cdGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlICE9PSAxKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcblx0XHRcdFx0dXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuXHRcdFx0XHR1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG5cdFx0XHRcdHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuXHRcdFx0XHR1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcblx0XHRcdHByb2Nlc3MuZXhpdCgxKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG59O1xuXG5jb25zdCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5kYi5vbmNlKFwib3BlblwiLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwiTW9uZ29EQiBjb25uZWN0ZWQuXCIpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/dbConnect.ts\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-micro\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI/MjM2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tc2VydmVyLW1pY3JvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1taWNyb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-server-micro\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIj9lNzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRvdGVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });