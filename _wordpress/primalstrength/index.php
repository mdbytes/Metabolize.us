<!-- Home page for primal strength theme -->

<?php get_header(); ?>
<div class="container-fluid">
    <div id="first_row" class="row">
        <div id="headline" class="col">
            <h2>Featured Articles</h2>
        </div>
    </div>
    <div id="second_row" class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">                
                    <?php
                                $args = 1416;
                                $queried_post = get_post($args);                
                                $title = $queried_post->post_title;
                                $post_excerpt = strip_tags(substr($queried_post->post_content,0,250));
                                $image = wp_get_attachment_image_src( get_post_thumbnail_id( $args ), 'single-post-thumbnail' ); 
                                echo '<h5 class="card-title">'.$title.'</h5>';
                                echo '<div class="post-thumbnail">';
                                echo '<p class="p-center-image"><img src="'.$image[0].'" alt="thumbnail image"></p>';
                                echo '</div>';
                                
                                echo '<br><p>'.$post_excerpt.'<a href="'.get_the_permalink($args).'">&nbsp;&nbsp;....  Read More</a></p>';
                        ?>
                    

                    
                    <br><a href="<?php echo get_the_permalink($args); ?>" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                        <?php
                                $args = 808;
                                      $queried_post = get_post($args);                
                                $title = $queried_post->post_title;
                                $post_excerpt = strip_tags(substr($queried_post->post_content,0,250));
                                $image = wp_get_attachment_image_src( get_post_thumbnail_id( $args ), 'single-post-thumbnail' ); 
                                echo '<h5 class="card-title">'.$title.'</h5>';
                                echo '<div class="post-thumbnail">';
                                echo '<p class="p-center-image"><img src="'.$image[0].'" alt="thumbnail image"></p>';
                                echo '</div>';
                                
                                echo '<br><p>'.$post_excerpt.'<a href="'.get_the_permalink($args).'">&nbsp;&nbsp;....  Read More</a></p>';
                        ?>
                    

                    
                    <br><a href="<?php echo get_the_permalink($args); ?>" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    </div>
    <div id="third_row" class="row">
        
    </div>
    <div id="fourth_row" class="row">
        <div class="col-md-8">
            <div id="about_us" class="card">
                <div class="card-body">
                    <h3 class="card-title">About Us</h3>
                    <p class="card-text" style="font-size:110%;">Primal Strength represents the accumulated knowledge and experience of Martin Dwyer.  Martin has been a member of The International Sports Sciences Association (ISSA) since 2016 where he holds the qualifications of Certified Fitness Trainer (CFT) and Certified Specialist in Strength and Conditioning (CSSC). <a href="<?php echo get_permalink($post = 2); ?>">Read More</a></p>

                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div id="about_us_image" class="card">
                <div class="card-body">
                    <p class="p-center-image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/ps_about_us_image.png" alt="about us image" height="300"></p>
                    <p class="p-center-image">Daily insights on <a href="https://www.instagram.com/livestrongmd/">Instagram</a></p>
                </div>
            </div>
        </div>
    
    </div>
    <div id="fifth_row" class="row">
        <div id="fifth_row_title" class="row">
            <h3>Resources for</h3>
        </div>
        <div id="resources_row" class="row">
             <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <p class="p-center-image"><a href="https://goprimalstrength.com/category/exercise/"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/exercise_600x600.png" alt="exercise image" height="300"></a></p>
                    <p class="p-center-image">Exercise</p>
                </div>
                </div>
             </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <p class="p-center-image"><a href="https://goprimalstrength.com/category/nutrition/"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/nutrition_600x600.png" alt="nutrition image" height="300"></a></p>
                    <p class="p-center-image">Nutrition</p>
                </div>
                </div>
            
        </div>
            <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <p class="p-center-image"><a href="https://goprimalstrength.com/category/coaching/"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/motivation_600x600.png" alt="motivation image" height="300"></a></p>
                    <p class="p-center-image">Motivation</p>
                </div>
                </div>
            </div>
            
        </div>
    </div>

    
    <div id="sixth_row" class="row">
        
        <div class="col-md-4">
            <div  id= "contact_us" class="card">
                <div class="contact_us card-body">
                    <h3 class="card-title">Contact Martin</h3>
                    <form action="<?php echo get_stylesheet_directory_uri(); ?>/sending_message.php" method="post" id="contact-form">
                        <div class="form-group">
                            <label for="email_address">Email address</label>
                            <input type="text" class="email required form-control" id="email_address" name="email_address" placeholder="name@example.com">
                        </div>

                        <div class="form-group">
                            <label for="contact_message">Message</label>
                            <textarea class="form-control" id="contact_message" name="contact_message" rows="3"></textarea>
                        </div>
                        <button id="message_submit" name="submit-btn" type="submit" class="btn btn-primary mb-2">Send Message</button>
                    </form>
                    
                </div>
            </div>

        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <p class="p-center-image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/deadlifting.png" alt="deadlift image" height="300"></p>
                    <p class="p-center-image"></p>
                </div>
                </div>
            </div>
        
        
    </div>
 </div>


<?php get_footer(); ?>
