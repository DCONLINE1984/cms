<?php

/**
 * The page model
 * @author Dean Clow 
 */

class Page extends \Phalcon\Mvc\Model
{
    /**
     * The id
     * @var integer
     */
    public $id;

    /**
     * The content
     * @var string
     */
    public $content;
    
    /**
     * Holds the title
     * @var String
     */
    public $title;
    
    /**
     * Holds the created date
     * @var String
     */
    public $created;

    /**
     * Holds the modified date
     * @var String
     */
    public $modified;
    
    /**
     * Show on menu flag
     * @var Int
     */
    public $show_on_menu = 0;
    
    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'page';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return BlogPost[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return BlogPost
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }
}