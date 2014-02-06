var ratio = 1.1;
var fps = 1 / 15;

document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('wall_canvas');
    var video = document.getElementById('video');
    var context = canvas.getContext("2d");

    canvas.height = video.height * ratio;
    canvas.width = video.width * ratio;

    var v_style = 'padding-top: ' + ((canvas.height - video.height) / 2) + 'px;';
    video.setAttribute('style', v_style);

    var c_width = canvas.clientWidth;
    var c_height = canvas.clientHeight;

    video.addEventListener('play', function () {
        draw_on_wall(this, context, c_width, c_height);
    });
}, false);

function draw_on_wall(video, context, width, height) {
    if (!video.paused) {
        context.drawImage(video, 0, 0, width, height);
        setTimeout(draw_on_wall, fps, video, context, width, height);
    }
}
