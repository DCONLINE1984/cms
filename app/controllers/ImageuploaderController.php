<?php

/**
 * Image uploader controller
 * @author Dean Clow
 */
class ImageuploaderController extends CommonController
{
    /**
     * Upload a new image action
     * @return Json
     */
    public function uploadImageAction()
    {
        $this->setJsonResponse();
        if(!isset($_FILES['Upload']) || empty($_FILES['Upload']['tmp_name'])){
            return array('success' => false,
                         'message' => 'Failed to upload image');
        }
        $service = new ImageUploaderService();
        $return  = $service->uploadImage();
        if($return===false){
            return array('success' => false,
                         'message' => 'Failed to upload image');
        }
        return array('filename' => $return,
                     'success'  => true);
    }
}

