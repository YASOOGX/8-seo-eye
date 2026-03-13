<?php get_header(); the_post();
/*
*Template Name: من نحن 
*/
?>
         <!-- start landing  -->
  <div class="landing landing-2">
    <div class="bg-image">
      <img src="<?php bloginfo('template_directory'); ?>/assets/image/landing-2.png" alt="">
    </div>
    <div class="container">
      <div class="text-landing-2">
        <div class="title-landing">
          <h1><img src="<?php bloginfo('template_directory'); ?>/assets/image/title-2.svg" alt="">من نحن</h1>
          <div class="pages">
            <a href="">الرئيسيه</a> <i class="fa-solid fa-angle-left"></i> <a href="">من نحن</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end landing  -->
 <!-- ////////////////////////////////////////// -->
  <!-- start about us  -->
  <section class="about-us" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
    <div class="bg bg-left-top" style="top: -100px;">
      <img src="<?php bloginfo('template_directory'); ?>/assets/image/about-left-top.svg" alt="">
    </div>
    <div class="bg bg-right-bottom" style="top: 100px;">
      <img src="<?php bloginfo('template_directory'); ?>/assets/image/about-bottom-right.svg" alt="">
    </div>

    <!-- <div class="bg bg-left-bottom" style="bottom: -500px;" >
      <img src="assets/image/about-bottom.svg" alt="">
    </div> -->
    <div class="container">
      <div class="row row-cols-lg-2 row-cols-sm-1 row-cols-sm-1 py-5">
        <div class="col">
          <img src="<?php bloginfo('template_directory'); ?>/assets/image/about.png" alt="">
        </div>
        <div class="col">
          <h2><span class="auto text-primary"><?php the_field('title'); ?></span><span style="font-size: 0.5px;">.</span></h2>
          <p><?php the_field('desc'); ?></p>
          <ul class="option ">
			   <?php if( have_rows('name_image') ): while ( have_rows('name_image') ) : the_row(); ?>
           <li><img src="<?php the_sub_field('img'); ?>"" alt="">
              <p><?php the_sub_field('name'); ?></p>
            </li>
            <?php endwhile; else : endif; ?>
          
          </ul>

        </div>
      </div>
      <div class="list-about">
			   
		 <?php if( have_rows('name_desc') ): while ( have_rows('name_desc') ) : the_row(); ?>
          <div>
			   <h1 class="text-primary"><?php the_sub_field('name'); ?>:</h1>
           <p><?php the_sub_field('desc'); ?></p>
			    </div>
			   <?php endwhile; else : endif; ?>
      
      </div>
    </div>
  </section>
  <!-- end about us  -->
<?php get_footer();?>