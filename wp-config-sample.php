<?php
# Database Configuration

define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
$table_prefix = 'wp_';

# Security Salts, Keys, Etc
# api.wordpress.org/secret-key/1.1/salt
define('AUTH_KEY',         'kd+1(Y3K_;A~vjE>xRx4/8,LmX6:XPg%D1?I~N{:]EIHn|U$m%Axg&/zh;p&F!y#');
define('SECURE_AUTH_KEY',  'O)=9TbMNq6A5QnLk|evS^jbKG_nrW{9RDd!5}|BdDd+rEDb+$&]YJzZPY7NCN(z+');
define('LOGGED_IN_KEY',    'tQTx%,DqT|n45%Q{}d>z-~qzY6t%%:j|-%4c[NrQ2}=bUVLtte|VF.PZ,/7I7NZJ');
define('NONCE_KEY',        'nh5vBN|&p9PV@n|U(yQ3|0z|_hSg7^eGi/TkaIHut|8|gbvix4_{C>.&y7Q47wp[');
define('AUTH_SALT',        'w/={<RgGXV@uSTpy7!oVca-/Sy.M#sA*JK(-@IQ:EyYHTpyFuT6. (nYRZs[K^k)');
define('SECURE_AUTH_SALT', '2G.F{31yGVlXaCP~ve6(DwRyrC)JF*&UmM*>(ijxm-}G7Wi+m~,}E(~D:be?pZ4P');
define('LOGGED_IN_SALT',   'Jm+?E|RmKd7eS8&V?BU({&X/=Rg+ti3DS-#pWvS$(Z+D*8a]<k{U+EPb%;{e>-,;');
define('NONCE_SALT',       '}fch4KXGD#sK3T !<^S+)+Pe1IZ7bk/G@l~I+ _4A-|E5o`*Hi6,.ReBkaSN@Wdw');

define('WP_DEBUG', false);

if (file_exists(dirname(__FILE__) . '/wp-config-local.php')):
    # IMPORTANT: ensure your local config does not include wp-settings.php
    define('WP_LOCAL_DEV', true);
    require_once(dirname(__FILE__) . '/wp-config-local.php');
else:
    # Production configs
endif;

# That's It. Pencils down
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');
require_once(ABSPATH . 'wp-settings.php');

$_wpe_preamble_path = null; if(false){}
