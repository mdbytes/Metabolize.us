<?php
    /* Template Name: About Page */
    require('header-site.php');
?>

  <main class="container">
    <div class="row">
        <div class="site-body col-lg-12">
            <?php require('wt_get_single_post.php'); ?>
        </div>
    
    </div>
</main>
<?php
  get_footer();

?>