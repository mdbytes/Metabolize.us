<?php

function wildthing_files() {
    /*
    wp_enqueue_style('bootstrap-styles',"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");
    wp_enqueue_style('jquery-ui-styles',"https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css");
    wp_enqueue_style('wildthing_main_styles', get_stylesheet_uri());
    */
    
    wp_enqueue_script('jquery',"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
    
    wp_enqueue_script('bootstrap',"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js");
    wp_enqueue_script('jquery-ui',"https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js");
    wp_enqueue_script('jquery-validate',"https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.js");
    wp_enqueue_script('wildthing_main_script',get_theme_file_uri('/site.js'), NULL, '1.0', true);
  
}

add_action('wp_enqueue_scripts', 'wildthing_files');



add_theme_support('post-thumbnails');



?>