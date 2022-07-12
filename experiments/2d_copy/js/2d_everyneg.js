var t1, t2;
var trialtype = ["surinv","invsur"];


function progress(){
  var trial = exp.data_trials.length;
	var pct = Math.round(100*(trial + exp.slideIndex)/(exp.nQs));
	$('.progress-bar').css('width', pct+'%').attr('aria-valuenow', pct);
}

function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions1 = slide({
    name : "instructions1",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  var control_data = [
    {
     "uniqueID": "surface1",
     "pre_formatted": "@!TONHAUSER: The ten board members voted last night. I was really surprised - I thought at least some of them would like Proposition 23. But all ten of them voted against it. Basically, ",
     "match": "every board member didn't like Proposition 23",
     "post_formatted": ". Not even a single one of them liked it.",
     "surface": "no board member liked Proposition 23",
     "inverse": "not all board members liked Proposition 23"
   },
   {
     "uniqueID": "inverse1",
     "pre_formatted": "@!SIDNER: Look, we completely fixed the issue. Indicators have improved across the board. Everybody's happy. \n@!GROSZ: (VOICEOVER) No, ",
     "match": "everybody isn't happy",
     "post_formatted": ". Some are happy but others are deeply dissatisfied with what they call a 'band aid solution.'",
     "surface": "nobody is happy",
     "inverse": "not all are happy"
   }
  ]

// var trialtype = ["surinv","invsur"]

  slides.controls = slide({
    name : "controls",

    present: _.shuffle(control_data),

    present_handle : function(stim) {
      progress();

      $(".err").hide();

      this.stim = stim;

      this.startTime = Date.now();

      $(".amb").html(stim.match);
      $(".pre").html(stim.pre_formatted);
      $(".post").html(stim.post_formatted);

      // randomize order in which surface and inverse scope paraphrases appear
      if (Math.random() < 0.5) {
          // then surface scope paraphrase on the left
          this.trialtype = "surinv"
          $(".first").html(stim.surface);
          $(".second").html(stim.inverse);
      } else {
          // then inverse scope paraphrase on the left
          this.trialtype = "invsur"
          $(".first").html(stim.inverse);
          $(".second").html(stim.surface);
      }

      this.init_sliders();
      exp.sliderPost = null;
    },

    button : function() {
      if (exp.sliderPost == null) {
        $(".err").show();
      } else {
        this.RT = (Date.now() - this.startTime) / 1000;
        this.log_responses();
        _stream.apply(this);
      }
    },

    init_sliders : function() {
      utils.make_slider("#single_slider1", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },

    log_responses : function() {
      exp.data_trials.push({
        "RT": this.RT,
        "trialtype" : this.trialtype,
        "uniqueID": this.stim.uniqueID,
        "response" : exp.sliderPost
      });
    }
  });

  // sample three sets of 5 numbers from batches
  var threebatches = _.sample(batches,3);

  // combine the numbers in random order for a list of 15 numbers
  var ids15 = threebatches[0].concat(threebatches[1],threebatches[2]);
  ids15 = _.shuffle(ids15);

  // retrieve the 15 stimuli texts at these 15 positions in data
  var stim15 = [];
  for (var i = 0; i < ids15.length; i++){
      stim15 = stim15.concat(data[ids15[i]]);
  }

// trial slides
slides.one_slider = slide({
  name : "one_slider",

  present: stim15,

  present_handle : function(stim) {
    progress();

    $(".err").hide();

    this.stim = stim;

    this.startTime = Date.now();

    $(".amb").html(stim.match);
    $(".pre").html(stim.pre_formatted);
    $(".post").html(stim.post_formatted);

    // randomize order in which surface and inverse scope paraphrases appear
    if (Math.random() < 0.5) {
        // then surface scope paraphrase on the left
        this.trialtype = "surinv"
        $(".first").html(stim.surface);
        $(".second").html(stim.inverse);
    } else {
        // then inverse scope paraphrase on the left
        this.trialtype = "invsur"
        $(".first").html(stim.inverse);
        $(".second").html(stim.surface);
    }

    this.init_sliders();
    exp.sliderPost = null;
  },

  button : function() {
    if (exp.sliderPost == null) {
      $(".err").show();
    } else {
      this.RT = (Date.now() - this.startTime) / 1000;
      this.log_responses();
      _stream.apply(this);
    }
  },

  init_sliders : function() {
    utils.make_slider("#single_slider2", function(event, ui) {
      exp.sliderPost = ui.value;
    });
  },

  log_responses : function() {
    exp.data_trials.push({
      "RT": this.RT,
      "trialtype" : this.trialtype,
      "uniqueID": this.stim.uniqueID,
      "response" : exp.sliderPost
    });
  }
});


  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        assess : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        // reason : $("#reason").val(),
        context: $('input[name="context"]:checked').val(),
        comments : $("#comments").val(),
        // problems: $("#problems").val(),
        // fairprice: $("#fairprice").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          // "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          // "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  repeatWorker = false;
  (function(){
    var ut_id = "intonation-ambiguity-20210530";
    if (UTWorkerLimitReached(ut_id)) {
      $('.slide').empty();
      repeatWorker = true;
      alert("You have already completed the maximum number of HITs allowed by this requester. For technical reasons we publish experiments in multiple groups. Please click 'Return HIT' to avoid any impact on your approval rating.");
    }
  })();


  exp.trials = [];
  exp.catch_trials = [];
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  // exp.structure=["i0", 'subj_info', 'thanks'];

  exp.structure=["i0", "instructions1", "controls", "one_slider", 'subj_info', 'thanks'];
  // exp.structure=["instructions1","controls", 'subj_info', 'thanks'];


  exp.data_trials = [];

  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  // Extra check for US IP addresses
  // TO DO: add support for Canadian IP addresses
  function USOnly() {
    var accessKey = 'b487843addca6e9ec32e6ae28aeaa022';
     $.ajax({
       url: 'https://geo.ipify.org/api/v1?apiKey=at_nuIzsEIQJAft6sr1WH67UTfFDeMIO',
       dataType: 'jsonp',
       success: function(json) {
       if (json.location.country != 'US') {
         var slides = document.getElementsByClassName('slide');
         for (i=0; i<slides.length; i++) {
          slides[i].style.display = 'none';
         }
          document.getElementsByClassName('progress')[0].style.display = 'none';
          document.getElementById('unique').innerText = "This HIT is only available to workers in the United States. Please click 'Return' to avoid any impact on your approval rating.";
        }
      }
     });
  }

  exp.go(); //show first slide
}
