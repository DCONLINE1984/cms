<?php

/**
 * The theming controller
 * @author Dean Clow
 */
class ThemingController extends CommonController
{
    /**
     * Upload a new image action
     * @return Json
     */
    public function resetToDefaultAction()
    {
        $this->setJsonResponse();
        $service = new ThemingService();
        $result = $service->resetToDefault();
        if(!$result){
            return array('success' => false,
                         'message' => 'Failed to reset css');
        }
        return array('success' => true);
    }
    
    /**
     * Get the custom css
     * @return Json
     */
    public function getCssAction()
    {
        $this->setJsonResponse();
        $service = new ThemingService();
        $result  = $service->getCustomCss();
        return array('success' => true,
                     'css'     => $result);
    }
    
    /**
     * Update the custom css
     * @return Json
     */
    public function updateAction()
    {
        $this->setJsonResponse();
        $service    = new ThemingService();
        $css        = $this->request->getPost("css");
        $result     = $service->update($css);
        if(!$result){
            return array('success' => false,
                         'message' => 'Failed to update page');
        }
        return array('success' => true);
    }
}

