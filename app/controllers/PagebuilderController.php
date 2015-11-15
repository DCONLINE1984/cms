<?php

/**
 * The page builder controller
 * @author Dean Clow
 */

class PagebuilderController extends CommonController
{
    /**
     * Get the page content only
     * @return ViewModel
     */
    public function getPageContentAction()
    {
        $service = new PageService();
        $rs = $service->getPage($this->request->get("id"));
        $this->view->content = $rs['content'];
    }
    
    /**
     * Get all pages
     * @return Json
     */
    public function getPagesAction()
    {
        $this->setJsonResponse();
        $service = new PageService();
        return $service->getPages();
    }
    
    /**
     * Get page content for a given id
     * @return Json
     */
    public function getPageAction()
    {
        $this->setJsonResponse();
        $service = new PageService();
        return $service->getPage($this->request->get("id"));
    }
    
    /**
     * Add a new static page
     * @return Json
     */
    public function addPageAction()
    {
        $this->setJsonResponse();
        $service = new PageService();
        $id = $this->request->getPost("id");
        if(empty($id)){
            //add a new page
            $result = $service->addPage(array(  'content' => $this->request->getPost("content"),
                                                'title'   => $this->request->getPost("title"),
                                                'show_on_menu' => (int)$this->request->getPost("showOnMenu"),
                                                'created' => date("Y-m-d H:i:s")));
        }else{
            //update an existing page
            $result = $service->editPage(array(  'content' => $this->request->getPost("content"),
                                                 'title'   => $this->request->getPost("title"),
                                                 'show_on_menu' => (int)$this->request->getPost("showOnMenu"),
                                                 'id'      => $id,
                                                 'modified' => date("Y-m-d H:i:s")));
        }
        if(!$result){
            return array('success' => false,
                         'message' => 'Failed to update page');
        }
        return array('success' => true);
    }
    
    /**
     * Delete a page
     * @return Json
     */
    public function deletePageAction()
    {
        $this->setJsonResponse();
        $service = new PageService();
        $id = $this->request->getPost("id");
        $result = $service->delete($id);
        if(!$result){
            return array('success' => false,
                         'message' => 'Failed to remove page');
        }
        return array('success' => true);
    }
}

