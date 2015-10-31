<?php

/**
 * The image uploader service
 * @author Dean CLow
 */

class ImageUploaderService
{
    /**
     * Upload the image
     * @return Boolean/String
     */
    public function uploadImage()
    {
        //move to the correct location
        $tmpName    = $_FILES["Upload"]["tmp_name"];
        $name       = $_FILES["Upload"]["name"];
        $result = move_uploaded_file($tmpName, $_SERVER['DOCUMENT_ROOT']."/public/uploads/{$name}");
        if(!$result){
            return false;
        }
        return $name;
    }
}