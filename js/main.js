jQuery(function($){
  //ボタンイベント
  $(".c-button--pause").click(function(){
    $(".rotation").removeClass("is-play");
    $(".rotation-follow ").removeClass("is-play");
    $(".c-button--pause").removeClass("is-play");
    $(".c-button--play").removeClass("is-play");
    $(".rotation").addClass("is-pause");
    $(".rotation-follow ").addClass("is-pause");
    $(".c-button--pause").addClass("is-pause");
    $(".c-button--play").addClass("is-pause");
  });
  $(".c-button--play").click(function(){
    $(".rotation").removeClass("is-pause");
    $(".rotation-follow").removeClass("is-pause");
    $(".c-button--pause").removeClass("is-pause");
    $(".c-button--play").removeClass("is-pause");
    $(".rotation").addClass("is-play");
    $(".rotation-follow").addClass("is-play");
    $(".c-button--pause").addClass("is-play");
    $(".c-button--play").addClass("is-play");
  });
});