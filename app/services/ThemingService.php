<?php

/**
 * The theming service
 * @author Dean CLow
 */

class ThemingService
{
    /**
     * Holds the path to the default css file
     * @var String
     */
    private $defaultCssFile = '/modules/Cms/resources/default.css';
    
    /**
     * Holds the path to the custom css file
     * @var String
     */
    private $cssFile = '/modules/Cms/resources/other.css';
    
    /**
     * Get the users custom css
     * @return Array
     */
    public function getCustomCss()
    {
        $path = $_SERVER['DOCUMENT_ROOT'] . $this->cssFile;
        $css = file_get_contents($path);
        return $css;
    }
    
    /**
     * Update the custom css
     * @param string $str
     * @return boolean
     */
    public function update($str="")
    {
        $path = $_SERVER['DOCUMENT_ROOT'] . $this->cssFile;
        $myfile = fopen($path, "w") or die("Unable to open file!");
        fwrite($myfile, $str);
        fclose($myfile);
        return true;
    }
    
    /**
     * Reset the site to the default
     * @return Boolean
     */
    public function resetToDefault()
    {
        $path = $_SERVER['DOCUMENT_ROOT'] . $this->defaultCssFile;
        $css = file_get_contents($path);
        //now write over the existing
        $path = $_SERVER['DOCUMENT_ROOT'] . $this->cssFile;
        $myfile = fopen($path, "w") or die("Unable to open file!");
        fwrite($myfile, $css);
        fclose($myfile);
        return true;
    }
}