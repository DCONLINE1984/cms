<?php

/**
 * The common controller (all others extend from this)
 * @author Dean Clow
 */

class CommonController extends \Phalcon\Mvc\Controller
{
    protected $_isJsonResponse = false;

    /**
     * Set json response
     * @return void
     */
    public function setJsonResponse() {
        $this->view->disable();
        $this->_isJsonResponse = true;
        $this->response->setContentType('application/json', 'UTF-8');
    }

    /**
     * Execute after route loaded
     * @param \Phalcon\Mvc\Dispatcher $dispatcher
     * @return type
     */
    public function afterExecuteRoute(\Phalcon\Mvc\Dispatcher $dispatcher) {
        if ($this->_isJsonResponse) {
          $data = $dispatcher->getReturnedValue();
          if (is_array($data)) {
            $data = json_encode($data);
          }

          $this->response->setContent($data);
        }
        return $this->response->send();
    }
}