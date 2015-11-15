<?php

/**
 * The page service
 * @author Dean CLow
 */

class PageService
{
    /**
     * Get all pages
     * @return Array
     */
    public function getPages()
    {
        $results    = Page::find(array(
            "order" => "created DESC"
        ));
        $datasource = array();
        foreach($results as $result){
            $datasource[] = array('content'    => $result->content,
                                  'title'      => $result->title,
                                  'created'    => $result->created,
                                  'modified'   => $result->modified,
                                  'link'       => "/pagebuilder/getpagecontent?id=".$result->id,
                                  'showOnMenu' => $result->show_on_menu,
                                  'onMenu'     => ($result->show_on_menu)? 'Yes' : 'No',
                                  'id'         => $result->id);
        }
        return $datasource;
    }
    
    /**
     * Get a page
     * @param Int $id
     * @return Array
     */
    public function getPage($id)
    {
        $result     = Page::findFirst("id = {$id}");
        return array('content'    => $result->content,
                     'title'      => $result->title,
                     'modified'   => $result->modified,
                     'created'    => $result->created,
                     'id'         => $result->id,
                     'link'       => "/pagebuilder/getpagecontent?id=".$result->id,
                     'onMenu'     => ($result->show_on_menu)? 'Yes' : 'No',
                     'showOnMenu' => $result->show_on_menu);
    }
    
    /**
     * Add a new page
     * @param Array $parameters
     * @return Boolean
     */
    public function addPage($parameters)
    {
        $model = new Page();
        $result = $model->save( $parameters,
                                array('content',
                                      'title',
                                      'show_on_menu',
                                      'created'));
        return $result;
    }
    
    /**
     * Edit the page
     * @param type $parameters
     * @return type
     */
    public function editPage($parameters)
    {
        //get the original created date
        $rs = $this->getPage($parameters['id']);
        $parameters['created'] = $rs['created'];
        $model = new Page();
        $result = $model->save( $parameters,
                                array('content',
                                      'title',
                                      'created',
                                      'modified',
                                      'show_on_menu',
                                      'id'));
        return $result;
    }
    
    /**
     * Delete a page
     * @param Int $id
     * @return Boolean
     */
    public function delete($id)
    {
        $model = Page::findFirst("id = {$id}");
        return $model->delete();
    }
}